import { useEffect, useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import BingoSlice, { bingo } from "../store/slices/bingo"
import { RootState } from "../store/reducers"

function UseBingo() {
    const [Id, setId] = useState(0);
    const dispatch = useDispatch();

    const createBingo = useCallback((value: bingo) => {
        dispatch(BingoSlice.actions.createBingo({ id: Id.toString(), ...value }))
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