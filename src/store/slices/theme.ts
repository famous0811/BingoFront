import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const ThemeSlice = createSlice({
    name: "Theme",
    initialState: {
        isDark: false,
    },
    reducers: {
        setDark(state, action: PayloadAction<boolean>) {
            state.isDark = action.payload;
        }
    }
});

export default ThemeSlice