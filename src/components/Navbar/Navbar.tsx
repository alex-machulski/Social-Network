import React from 'react';
import {NavLink} from 'react-router-dom';
import pr from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={pr.nav}>
            <div className={pr.item}>
                <NavLink to={"/profile"} activeClassName={pr.activeLink}>Profile</NavLink>
            </div>
            <div className={pr.item}>
                <NavLink to={"/dialogs"} activeClassName={pr.activeLink}>Messages</NavLink>
            </div>
            <div className={pr.item}>
                <NavLink to={"/users"} activeClassName={pr.activeLink}>Users</NavLink>
            </div>
            <div className={pr.item}>
                <NavLink to={"/news"} activeClassName={pr.activeLink}>News</NavLink>
            </div>
            <div className={pr.item}>
                <NavLink to={"/music"} activeClassName={pr.activeLink}>Music</NavLink>
            </div>
            <div className={pr.item}>
                <NavLink to={"/settings"} activeClassName={pr.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;