import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: Array<number>
}

const User = (props: UserPropsType) => {

    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + props.user.id}>
                            <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                                 className={styles.userPhoto}
                                 alt={""}
                            />
                            </NavLink>
                        </div>
                        <div>
                            {props.user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                          onClick={() => {
                                              props.unfollow(props.user.id);
                                          }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                          onClick={() => {
                                              props.follow(props.user.id);
                                          }}>Follow</button>
                            }
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{props.user.name}</div>
                            <div>{props.user.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
        </div>
    )
}


export default User;