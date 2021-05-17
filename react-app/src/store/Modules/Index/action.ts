import types from './actionTypes'
import {IToggle} from './reducer'

export const toggle = (data:IToggle) => ({
    type:types.SIDE_TOGGLE,
    data
})