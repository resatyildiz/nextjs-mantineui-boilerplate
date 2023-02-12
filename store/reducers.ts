import { combineReducers } from "@reduxjs/toolkit";
import appStoreReducer from "./appStore";

/**
 * You can add your reducers
 */
const rootReducer = combineReducers({
    appStore: appStoreReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;