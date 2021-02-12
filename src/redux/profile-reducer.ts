import {ActionsType, PostType, ProfilePageType} from "./store";
import {ChangeEvent} from "react";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large: string | undefined
        small: string | undefined
    }
    userId: number
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post!", likesCount: 25}
    ],
    newPostText: "it-kamasutra",
    profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const);

export const updateNewPostTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: e.currentTarget.value
    } as const);

export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const);

export type AddPostActionType = ReturnType<typeof addPostActionCreator>;
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>;
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>;

export default profileReducer;