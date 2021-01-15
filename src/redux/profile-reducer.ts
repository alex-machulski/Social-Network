import {ActionsType, PostType, ProfilePageType} from "./state";
import {ChangeEvent} from "react";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export default profileReducer;