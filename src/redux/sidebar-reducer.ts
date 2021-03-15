import {ActionsType} from "./redux-store";

let initialState = {}
type InitialStateType = typeof initialState;

const sidebarReducer = (state: InitialStateType = initialState, action: ActionsType) => {

    return state;
}

export default sidebarReducer;