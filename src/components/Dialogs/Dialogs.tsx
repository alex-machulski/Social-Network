import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

export type DialogsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

function Dialogs(props: DialogsType) {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

    const addNewMessage = (values: AddMessageFormType) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>

                </div>
            </div>
        </div>
    )
}

type AddMessageFormType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;