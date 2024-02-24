import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import Favourite from "../Types/Favourite";

const initialState: Favourite = [];

export const slice = createSlice({
	name: "favourite",
	initialState,
	reducers: {	
		addName: (state: Favourite, action: PayloadAction<{ name: string }>) : void => {
			state.push(action.payload.name);
		},
		removeName: (state: Favourite, action: PayloadAction<{ name: string }>) : Favourite => {
			return state.filter(name => name !== action.payload.name);
		}
	}
});

export const {addName, removeName} = slice.actions;

type State = {
    favourite: Favourite
}

export const favouriteNames = (state: State): Favourite => state.favourite;

export default slice.reducer;
