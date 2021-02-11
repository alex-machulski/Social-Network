import {ActionsType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

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
}

let initialState: UsersStateType = {
    users: [
        // {id: 1, photoUrl: "https://cs10.pikabu.ru/post_img/2020/08/20/5/1597904915162216364.png",
        //     followed: false, fullName: "Dmitry", status: "I am the boss", location: {city: "Minsk", country: "Belarus"}},
        // {id: 2, photoUrl: "https://cs10.pikabu.ru/post_img/2020/08/20/5/1597904915162216364.png",
        //     followed: true, fullName: "Sasha", status: "Hi to everyone!", location: {city: "Moscow", country: "Russia"}},
        // {id: 3, photoUrl: "https://cs10.pikabu.ru/post_img/2020/08/20/5/1597904915162216364.png",
        //     followed: false, fullName: "Andrew", status: "Looking for a job", location: {city: "Kiev", country: "Ukraine"}}
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
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
        default:
            return state;
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID: userID} as const);
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID: userID} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users: users} as const);
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage} as const);
export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const);

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>


export default usersReducer;