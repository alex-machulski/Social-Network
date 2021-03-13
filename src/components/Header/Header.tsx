import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
    logout: () => void
}

function Header(props: HeaderPropsType) {
    return (
        <header className={styles.header}>
            <img src={'https://cdn.pixabay.com/photo/2016/01/19/07/35/social-1148031_960_720.png'} alt=""/>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;