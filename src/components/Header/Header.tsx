import React from 'react';
import pr from './Header.module.css';

function Header() {
    return (
        <header className={pr.header}>
            <img src={'https://cdn.pixabay.com/photo/2016/01/19/07/35/social-1148031_960_720.png'}/>
        </header>
    );
}

export default Header;