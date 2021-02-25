import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
};

type MapDispatchPropsType = {
    getAuthUserData: () => void
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    getAuthUserData
})(HeaderContainer);