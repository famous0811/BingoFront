import { combineReducers } from 'redux'
import Theme from './slices/theme'
import Bingo from './slices/bingo'
import Modal from './slices/modal'
import thread from './slices/thread'

const reducers = combineReducers({
    [Theme.name]: Theme.reducer,
    [Bingo.name]: Bingo.reducer,
    [Modal.name]: Modal.reducer,
    [thread.name]: thread.reducer,
});

export type RootState = ReturnType<typeof reducers>

export default reducers;