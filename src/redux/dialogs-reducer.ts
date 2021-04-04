import {ActionsType} from "./redux-store";
const SEND_MESSAGE = "dialogs/SEND-MESSAGE";

export type MessageType = {
    id: number
    message: string;
}
export type DialogItemType = {
    name: string
    id: number
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Valera"}
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Bro!"},
        {id: 5, message: "Hello!"}
    ],
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const);

export type SendMessageActionType = ReturnType<typeof sendMessageCreator>;

export default dialogsReducer;