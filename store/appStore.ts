import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeModeType =
    | "light"
    | "dark";

interface AppStore {
}

const initialState: AppStore = {
}

const appStore = createSlice({
    name: "appStore",
    initialState,
    reducers: {
    }
});

export default appStore.reducer;