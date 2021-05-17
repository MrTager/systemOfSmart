import react from 'react'
import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer as index} from "./Modules/Index"

export interface RootState {
    index:index.IndexState
}
let store = createStore(
    combineReducers({
        index:index.indexReducer
    }),
    applyMiddleware(thunk)
)

export default store