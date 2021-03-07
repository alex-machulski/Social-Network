import React from 'react';
import pr from './Post.module.css';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

function Post(props: PostType) {
    return (

        <div className={pr.item}>
            <img src={"https://i.pinimg.com/736x/03/6b/52/036b52f883bcd1ed0282736321d4ea59.jpg"} alt={""}/>
            {props.message}
            <div>
                <span>likes: </span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;