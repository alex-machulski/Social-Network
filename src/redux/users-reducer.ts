import {usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionsType, AppStateType} from "./redux-store";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number> // array of user's id
}

let initialState: UsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            };
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userID: number) => ({type: FOLLOW, userID} as const);
export const unfollowSuccess = (userID: number) => ({type: UNFOLLOW, userID} as const);
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const);
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching, userId
} as const);

export type FollowSuccessActionType = ReturnType<typeof followSuccess>;
export type UnfollowSuccessActionType = ReturnType<typeof unfollowSuccess>;
export type SetUsersActionType = ReturnType<typeof setUsers>;
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>;
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>;
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>;
export type ToggleIsFollowingProgressActionType = ReturnType<typeof toggleIsFollowingProgress>;

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const requestUsers = (page: number, pageSize: number): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }

const followUnfollowFlow = async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>,
                                  userId: number,
                                  apiMethod: any,
                                  actionCreator: typeof followSuccess | typeof unfollowSuccess) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }

export const unfollow = (userId: number): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }

export default usersReducer;