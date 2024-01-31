import {configureStore} from "@reduxjs/toolkit";
import generatorReducer from "./generator";
import generatorFavourite from "./favourite";

export default configureStore({
	reducer: {
		generator: generatorReducer,
		favourite: generatorFavourite,
	}
});
