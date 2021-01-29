import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {CombinedState, Store} from "redux";
import {ChangeEvent} from "react";
import {FollowActionType, SetUsersActionType, UnfollowActionType} from "./users-reducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

export type ReduxStoreType = Store<CombinedState<{
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: object;
}>, ActionsType>

// Action Types
export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyActionType |
    SendMessageActionType | FollowActionType | UnfollowActionType | SetUsersActionType;

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post!", likesCount: 25}
            ],
            newPostText: "it-kamasutra"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Victor"},
                {id: 5, name: "Valera"}
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Bro!"},
                {id: 5, message: "Hello!"}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель паттерн (observer)
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
    }
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: object
}

export type AppType = {
    // state: {
    //     profilePage: ProfilePageType
    //     dialogsPage: DialogsPageType
    // }
    // dispatch: (action: ActionsType) => void
    // store: ReduxStoreType
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type ProfileType = {
    // store: ReduxStoreType
}

export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type DialogsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
}

export type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: () => void
}

export type MyPostsContainerType = {
    // store: ReduxStoreType
}

export type DialogsContainerType = {
    // store: ReduxStoreType
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogItemType = {
    name: string
    id: number
}

export type MessageType = {
    id: number
    message: string;
}

export default store;
