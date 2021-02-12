import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';

type ConnectPropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId?: string
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ConnectPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
    {setUserProfile})(WithUrlDataContainerComponent);