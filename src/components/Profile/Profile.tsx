import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props: ProfileType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;