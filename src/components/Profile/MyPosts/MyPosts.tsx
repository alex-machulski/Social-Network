import React, {ChangeEvent} from 'react';
import pr from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";

export type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: () => void
}

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e);
    }

    return (
        <div className={pr.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={pr.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;