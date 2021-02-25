import {Dispatch} from "redux"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, DialogsPageType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer =
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

