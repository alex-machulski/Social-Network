import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;

type PathParamsType = {
    userId?: string
};

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }

        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth)
            return <Redirect to={"/login"}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
};

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
    {getUserProfile})(WithUrlDataContainerComponent);