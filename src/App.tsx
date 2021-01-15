import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {AppType} from "./redux/state";

function App(props: AppType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={"/dialogs"} render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                                    dispatch={props.dispatch}
                                                                    store={props.store}
                    />}/>
                    <Route path={"/profile"} render={() => <Profile profilePage={props.state.profilePage}
                                                                    dispatch={props.dispatch}
                                                                    store={props.store}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
