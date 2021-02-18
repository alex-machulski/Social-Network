import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserDataAC: (id: number, email: string, login: string) => void
}

function Header(props: HeaderPropsType) {
    return (
        <header className={styles.header}>
            <img src={'https://cdn.pixabay.com/photo/2016/01/19/07/35/social-1148031_960_720.png'} alt=""/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;