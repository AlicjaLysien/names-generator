import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Generator from "../Types/Generator";
import Parts from "../Types/Parts";
import Genre from "../Types/Genre";
import chinese from "../Types/chinese";
import fantasy from "../Types/fantasy";
import japanese from "../Types/japanese";
import {ArrayWithNames} from "../Types/Name";

const initialState: Generator = {
	generatedNames: {
		chinese: [],
		fantasy: [],
		japanese: []
	},
	parts: {
		chinese,
		fantasy,
		japanese
	},
	numberOfNames: 3
};

export const slice = createSlice({
	name: "generator",
	initialState,
	reducers: {
		generateNames: (state: Generator, action: PayloadAction<{ genre: Genre }>) => {
			for(let i = 0; i < state.numberOfNames; i++){
				const numberOfParts: number = Math.floor(Math.random() * (2) + 2);
				const usedParts: Parts = 
					(action.payload.genre === "chinese" && state.parts.chinese) ||
					(action.payload.genre === "fantasy" && state.parts.fantasy) ||
					(state.parts.japanese);
				const partFirst: string = usedParts[0][Math.floor(Math.random() * (usedParts[0].length - 1))];
				const partSecond: string = usedParts[1][Math.floor(Math.random() * (usedParts[1].length - 1))];
				let createdName: string =  partFirst.charAt(0).toUpperCase() + partFirst.slice(1) + partSecond;
				if(numberOfParts === 3){
					if(action.payload.genre === ("fantasy" || "chinese")) {
						const partThird: string = usedParts[2][Math.floor(Math.random() * (usedParts[2].length - 1))];
						createdName = createdName + partThird;
					}
					if(action.payload.genre === "japanese") {
						const partThird: string = usedParts[1][Math.floor(Math.random() * (usedParts[1].length - 1))];
						createdName = createdName + partThird;
					}
				}
				if(action.payload.genre === "chinese") state.generatedNames.chinese[i] = createdName;
				if(action.payload.genre === "fantasy") state.generatedNames.fantasy[i] = createdName;
				if(action.payload.genre === "japanese") state.generatedNames.japanese[i] = createdName;
			}
		}
	}
});

export const {generateNames} = slice.actions;

type State = {
    generator: Generator
}

export const generatedNamesChinese = (state: State): [] | ArrayWithNames => state.generator.generatedNames.chinese;
export const generatedNamesFantasy = (state: State): [] | ArrayWithNames => state.generator.generatedNames.fantasy;
export const generatedNamesJapanese = (state: State): [] | ArrayWithNames => state.generator.generatedNames.japanese;
export const numberOfNames = (state: State): number => state.generator.numberOfNames;

export default slice.reducer;
