import React from "react";
import s from './../Dialogs.module.css';
import {MessageType} from "../../../redux/dialogs-reducer";

function Message(props: MessageType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;