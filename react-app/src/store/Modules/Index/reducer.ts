import {produce} from 'immer'
import {AnyAction} from 'redux'
export interface IToggle {
    toggle: boolean;
}
export interface IndexState {
    sideToggle:boolean
}
const defaultState:IndexState = {
    sideToggle:false
}
export const indexReducer = produce((state,action:AnyAction) => {
    switch (action.type){
        case 'SIDE_TOGGLE':
            state.sideToggle = action.toggle
            break;
    }
},defaultState)