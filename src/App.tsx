import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import store, {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

type AppPropsType = {
    initialized: boolean
    initializeApp: () => void
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/login"} render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

type MapStatePropsType = {
    initialized: boolean
}

type MapDispatchPropsType = {
    initializeApp: () => void
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    initialized: state.app.initialized
});

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        initializeApp
    }))(App);

const MainApp = (props: any) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp;