import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface BingoType {
    login: {
        show: boolean;
        value?: number;
    }
    bingo: {
        show: boolean;
        value: number;
    };
    create: {
        show: boolean;
        value?: number;
    }
}
const initialState: BingoType = {
    login: {
        show: false,
    },
    bingo: {
        show: false,
        value: 0,
    },
    create: {
        show: false,
    }
}
export type Modals = keyof typeof initialState;

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModal(state, action: PayloadAction<{ name: Modals, show: boolean, value?: number }>) {
            const { name, show, value } = action.payload;
            state[name].show = show;
            state[name].value = value;
        }
    }
})

export default modalSlice;