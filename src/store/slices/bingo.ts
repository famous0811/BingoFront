import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface ContentsItem {
    id: number
    content: string
}
interface BingoType {
    id?: number;
    name: string;
    category: string;
    size: number;//정사각형이니까 크기를 하나만 저장
    contents: ContentsItem[];
}
export type conItems = ContentsItem;
export type bingo = BingoType;

const initialState: Array<BingoType> = [];
let id = 0;

const BingoSlice = createSlice({
    name: "bingo",
    initialState,
    reducers: {
        createBingo(state, action: PayloadAction<BingoType>) {

            state.push({ id: id++, ...action.payload })
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