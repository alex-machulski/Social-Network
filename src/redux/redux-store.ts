import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {
    AddPostActionType,
    SetStatusActionType,
    SetUserProfileActionType,
    UpdateNewPostTextActionType
} from "./profile-reducer";
import dialogsReducer, {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
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

export type StoreType = typeof store;

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
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
    | SetStatusActionType;

// @ts-ignore
window.store = store

export default store;// Action Types
