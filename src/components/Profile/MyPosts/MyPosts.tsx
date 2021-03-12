import React from 'react';
import pr from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type MyPostsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values: AddNewPostFormType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={pr.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={pr.posts}>
                {postsElements}
            </div>
        </div>
    );
}

type AddNewPostFormType = {
    newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={"textarea"} type={"text"}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<AddNewPostFormType>({form: "profileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;