import React from "react";
import {UserType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: Array<number>
}

const Users = (props: UsersPropsType) => {

    return (
        <div>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />
            {
                props.users.map(u =>
                    <User
                        key={u.id}
                        user={u}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        followingInProgress={props.followingInProgress}
                    />)
            }
        </div>
    )
}

export default Users;