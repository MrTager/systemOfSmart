import types from './actionTypes'
interface IToggle {
    toggle:boolean
}
export const toggle = () => ({
    type:types.SIDE_TOGGLE
})