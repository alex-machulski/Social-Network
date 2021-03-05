import React from 'react';
import pr from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src={"https://static4.depositphotos.com/1003371/354/i/600/depositphotos_3544200-stock-photo-tropical-beach.jpg"}*/}
            {/*        alt=""*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={pr.descriptionBlock}>
                <div>
                    {/*<img src={"https://i.pinimg.com/736x/03/6b/52/036b52f883bcd1ed0282736321d4ea59.jpg"} width={100}/>*/}
                    <img src={props.profile.photos.large} alt=""/>
                    <ProfileStatus status={"hellomy"}/>
                </div>
                {props.profile.aboutMe}
            </div>
        </div>
    );
}

export default ProfileInfo;