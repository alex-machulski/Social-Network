import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionsType, AppStateType} from "./redux-store";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
};

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
} as const);

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;

export const getAuthUserData = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
};

export type SetUserDataActionType = ReturnType<typeof setAuthUserData>;

export default authReducer;

