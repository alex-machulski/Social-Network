import {profileAPI, usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionsType, AppStateType} from "./redux-store";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";

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
};

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post!", likesCount: 25}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const);
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const);
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const);
export const deletePostAC = (postId: number) => ({type: DELETE_POST, postId} as const);

export type AddPostActionType = ReturnType<typeof addPostAC>;
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>;
export type SetStatusActionType = ReturnType<typeof setStatus>;
export type DeletePostActionType = ReturnType<typeof deletePostAC>;

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;

export const getUserProfile = (userId: number): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    };


export const getStatus = (userId: number): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    };


export const updateStatus = (status: string): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    };


export default profileReducer;