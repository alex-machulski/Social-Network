import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionsType, AppStateType} from "./redux-store";
import {authAPI, ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";

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

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const);

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;

export const getAuthUserData = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        let response = await authAPI.me();

        if (response.resultCode === ResultCodesEnum.Success) {
            let {id, email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    };

export const login = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType | FormAction>) => {
        let response = await authAPI.login(email, password, rememberMe);

        if (response.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData());
        } else {
            let msg = response.messages.length > 0 ? response.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: msg}));
        }
    };


export const logout = (): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        let response = await authAPI.logout();

        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    };


export type SetUserDataActionType = ReturnType<typeof setAuthUserData>;

export default authReducer;

