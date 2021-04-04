import React from 'react';
import pr from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={pr.descriptionBlock}>
                <div>
                    {/*<img src={"https://i.pinimg.com/736x/03/6b/52/036b52f883bcd1ed0282736321d4ea59.jpg"} width={100}/>*/}
                    <img src={props.profile.photos.large
                        ? props.profile.photos.large
                        : "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"} alt=""/>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.fullName}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;