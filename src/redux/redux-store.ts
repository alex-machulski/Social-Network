import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {
    AddPostActionType, DeletePostActionType,
    SetStatusActionType,
    SetUserProfileActionType,

} from "./profile-reducer";
import dialogsReducer, {SendMessageActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {
    FollowSuccessActionType,
    SetCurrentPageActionType,
    SetTotalUsersCountActionType,
    SetUsersActionType,
    ToggleIsFetchingActionType,
    ToggleIsFollowingProgressActionType,
    UnfollowSuccessActionType
} from "./users-reducer";
import authReducer, {SetUserDataActionType} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer, {InitializedSuccessActionType} from "./app-reducer";

export type StoreType = typeof store;

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type ActionsType =
    AddPostActionType
    | SendMessageActionType
    | FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | SetUserProfileActionType
    | SetUserDataActionType
    | ToggleIsFollowingProgressActionType
    | SetStatusActionType
    | InitializedSuccessActionType
    | DeletePostActionType

// @ts-ignore
window.store = store

export default store;
