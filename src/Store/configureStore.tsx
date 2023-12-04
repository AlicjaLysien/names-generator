import {configureStore} from "@reduxjs/toolkit";
import generatorReducer from "./generator";

export default configureStore({
    reducer: {
        generator: generatorReducer,
    }
});
