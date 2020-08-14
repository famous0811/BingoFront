import modalSlice, { Modals } from "../store/slices/modal";
import { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/reducers";

function Usemodal(modalName: Modals) {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal[modalName]);

    const open = useCallback((value?: number) => {
        dispatch(modalSlice.actions.setModal({
            name: modalName,
            show: true,
            value: value
        }))
    }, [dispatch, modalName])

    const close = useCallback(() => {
        dispatch(modalSlice.actions.setModal({
            name: modalName,
            show: false
        }))
    }, [dispatch, modalName])

    return { isOpen, open, close }
}

export default Usemodal;