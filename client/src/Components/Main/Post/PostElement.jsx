import React from 'react';
import './PostElement.sass'
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deletePost} from "../../../API/posts";


const PostElement = (props) => {

    const dispatch = useDispatch();
    const clickHandler = (e) => {
        e.stopPropagation()
        dispatch(deletePost(props.id))
    }

    return (
        <>
            {
                props.title && props.body ?
            <div className='post-el'  >
                <button className="button__delete" onClick={clickHandler}>delete</button>
                <NavLink className="post-el__wrapper" to={`/post/${props.id}`} >
                    <h2>{props.title}</h2>
                    <p>{props.body}</p>
                </NavLink>
            </div>
                    :
            <></>
            }

        </>
    );
};

export default PostElement;