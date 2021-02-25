import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

export type StoreTypeV2 = typeof store;

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

// @ts-ignore
window.store = store

export default store;