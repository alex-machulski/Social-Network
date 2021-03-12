import {compose, Dispatch} from "redux"
import {DialogsPageType, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);


