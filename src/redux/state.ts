import {ChangeEvent} from "react";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

export const addPostActionCreator = (): ActionsType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>): ActionsType =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: e.currentTarget.value
    })

export type AddPostActionType = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It\'s my first post!", likesCount: 25}
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
            ]
        }
    },
    _callSubscriber(state: RootStateType) {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель паттерн (observer)
    },
    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export type AppType = {
    state: {
        profilePage: {
            posts: Array<PostType>
            newPostText: string
        }
        dialogsPage: {
            dialogs: Array<DialogItemType>
            messages: Array<MessageType>
        }
    }
    dispatch: (action: ActionsType) => void
}

export type ProfileType = {
    profilePage: {
        posts: Array<PostType>
        newPostText: string
    }
    dispatch: (action: ActionsType) => void
}

export type DialogsType = {
    state: {
        dialogs: Array<DialogItemType>
        messages: Array<MessageType>
    }
}

export type MyPostsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsType) => void
    newPostText: string
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

export type RootStateType = {
    profilePage: {
        posts: Array<PostType>
        newPostText: string
    }
    dialogsPage: {
        dialogs: Array<DialogItemType>
        messages: Array<MessageType>
    }
}

export default store;
