export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: () => void
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
}

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
    addPost() {
        let newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель паттерн (observer)
    },
    getState() {
        return this._state;
    }
}

// let rerenderEntireTree = (state: RootStateType) => {
//     console.log('state changed');
//}

// export const subscribe = (observer: (state: RootStateType) => void) => {
//     store.rerenderEntireTree = observer; //наблюдатель паттерн (observer)
// }

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
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type ProfileType = {
    profilePage: {
        posts: Array<PostType>
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type DialogsType = {
    state: {
        dialogs: Array<DialogItemType>
        messages: Array<MessageType>
    }
}

export type MyPostsType = {
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
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

// let state: RootStateType = {
//
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi, how are you?", likesCount: 12},
//             {id: 2, message: "It\'s my first post!", likesCount: 25}
//         ],
//         newPostText: "it-kamasutra"
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Dimych"},
//             {id: 2, name: "Andrey"},
//             {id: 3, name: "Sveta"},
//             {id: 4, name: "Victor"},
//             {id: 5, name: "Valera"}
//         ],
//         messages: [
//             {id: 1, message: "Hi!"},
//             {id: 2, message: "How are you?"},
//             {id: 3, message: "Yo"},
//             {id: 4, message: "Bro!"},
//             {id: 5, message: "Hello!"}
//         ]
//     }
// }

// export const addPost = () => {
//
//     let newPost: PostType = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }


export default store;
//window.store = store