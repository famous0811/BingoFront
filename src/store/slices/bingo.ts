import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BingoType {
    id: string;
    name: string;
    ctagori: string;
    size: number;//정사각형이니까 크기를 하나만 저장
    contents: string[];
}

export type bingo = BingoType;

const initialState: Array<BingoType> = [];

const BingoSlice = createSlice({
    name: "bingo",
    initialState,
    reducers: {
        createBingo(state, action: PayloadAction<BingoType>) {
            state.push({ ...action.payload })
        },
        deleteBingo(state, action: PayloadAction<string>) {
            // const pos =parseInt(action.payload);
            // const index = state.indexOf(pos);
            // if (index > -1) {
            //     state.splice(index, 1);
            // }
        },
        reviseBingo(state, action: PayloadAction<BingoType>) {
            const { id } = action.payload;
            state.map(data => data.id == id ? { ...action.payload } : { ...data });
        }
    },
})

export default BingoSlice;