import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Generator from "../Types/Generator";
import japanese from "../Types/japanese";

const initialState: Generator = {
    generatedNames: [],
    parts: {
        japanese,
        fantasy: [
            [],
            []
        ]
    } 
};

export const slice = createSlice({
    name: "generator",
    initialState,
    reducers: {
        generateNames: (state: Generator, action: PayloadAction<{ genre: string }>) => {
            state.generatedNames = generatedNames;
        }
    }
});

export const {generateNames} = slice.actions;

type State = {
    generator: Generator
}

export const generatedNamed = (state: State) => state.generator.generatedNames;

export default slice.reducer;
