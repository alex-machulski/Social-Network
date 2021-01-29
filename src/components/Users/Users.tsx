import {UserType} from "../../redux/users-reducer";
import styles from "./Users.module.css";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

function Users(props: UsersPropsType) {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://cs10.pikabu.ru/post_img/2020/08/20/5/1597904915162216364.png",
                followed: false,
                fullName: "Dmitry",
                status: "I am the boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://cs10.pikabu.ru/post_img/2020/08/20/5/1597904915162216364.png",
                followed: true,
                fullName: "Sasha",
                status: "Hi to everyone!",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://cs10.pikabu.ru/post_img/2020/08/20/5/1597904915162216364.png",
                followed: false,
                fullName: "Andrew",
                status: "Looking for a job",
                location: {city: "Kiev", country: "Ukraine"}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt={""}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;