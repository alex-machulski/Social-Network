import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserDataAC(id, email, login);
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    setAuthUserDataAC: (id: number, email: string, login: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    setAuthUserDataAC
})(HeaderContainer);