import React, {ChangeEvent} from 'react';
import pr from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsType} from "../../../redux/state";


function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value});
    }

    return (
        <div className={pr.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={pr.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;