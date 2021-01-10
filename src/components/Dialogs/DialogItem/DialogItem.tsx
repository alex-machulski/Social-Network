import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css';
import {DialogItemType} from "../../../redux/state";


function DialogItem(props: DialogItemType) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;