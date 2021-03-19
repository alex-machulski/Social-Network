import {ActionsType, AppStateType} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

type InitialAppStateType = {
    initialized: boolean
};

let initialState = {
    initialized: false
};

const appReducer = (state: InitialAppStateType = initialState, action: ActionsType): InitialAppStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const);
export type InitializedSuccessActionType = ReturnType<typeof initializedSuccess>;

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;

export const initializeApp = (): ThunkType => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        let promise = dispatch(getAuthUserData());
        promise.then(() => {
            dispatch(initializedSuccess())
        });
};
//
// export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
//     return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType | FormAction>) => {
//         authAPI.login(email, password, rememberMe)
//             .then(response => {
//                 debugger;
//                 if (response.resultCode === ResultCodesEnum.Success) {
//                     dispatch(getAuthUserData());
//                 } else {
//                     let msg = response.messages.length > 0 ? response.messages[0] : "Some error"
//                     dispatch(stopSubmit("login", {_error: msg}));
//                 }
//             })
//     }
// };
//
// export const logout = (): ThunkType => {
//     return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
//         authAPI.logout()
//             .then(response => {
//                 if (response.resultCode === 0) {
//                     dispatch(setAuthUserData(null, null, null, false));
//                 }
//             })
//     }
// };



export default appReducer;

