import {produce} from 'immer'
import {AnyAction} from 'redux'
export interface IndexState {
    sideToggle:boolean
}
const defaultState:IndexState = {
    sideToggle:true
}
export const indexReducer = produce((state,action:AnyAction) => {
    switch (action.type){
        case 'SIDE_TOGGLE':
            state.sideToggle = !state.sideToggle
            break;
    }
},defaultState)