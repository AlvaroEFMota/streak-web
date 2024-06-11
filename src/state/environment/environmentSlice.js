import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    api_url: 'http://127.0.0.1:8080'
}

const environmentSlice = createSlice({
    name: "environment",
    initialState,
    reducers: {
        setApiUrl: (state, action) => {
            state.api_url = action.payload;
        },
    }
})

export const { setApiUrl } = environmentSlice.actions;

export default environmentSlice.reducer;
