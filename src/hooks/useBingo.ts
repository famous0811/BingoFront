import { useEffect, useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import BingoSlice, { bingo } from "../store/slices/bingo"
import { RootState } from "../store/reducers"

function UseBingo() {
    // const [id, setId] = useState(0);
    const dispatch = useDispatch();

    // console.log("id :" + id);

    const createBingo = useCallback((value: bingo) => {
        dispatch(BingoSlice.actions.createBingo({ ...value }))
        // setId(id + 1);
        // console.log("id in :" + id);
    }, [dispatch])

    const deleteBingo = useCallback((value: string) => {
        dispatch(BingoSlice.actions.deleteBingo(value))
    }, [dispatch])

    const reviseBingo = useCallback((value: bingo) => {
        dispatch(BingoSlice.actions.reviseBingo(value))
    }, [dispatch])

    return { createBingo, deleteBingo, reviseBingo }
}

export default UseBingo;