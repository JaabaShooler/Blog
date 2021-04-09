import axios from "axios";
import {
    setCurrentPost,
    setFetching,
    setMessage,
    setNewPost,
    setPosts,
    unsetFetching,
    deleteingPost,
    update
} from "../Reducers/postsReducer";

const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export function fetchPosts(){
    return async dispatch => {
        try{
            dispatch(setFetching())
            const res = await axios.get('https://bloggy-api.herokuapp.com/posts', config);
            console.log(res.data);
            dispatch(setPosts(res.data));
            dispatch(unsetFetching())
        }catch (e) {
            dispatch(unsetFetching())
            console.log(e);
        }
    }
}

export function fetchPost(id){
    return async dispatch => {
        try{
            dispatch(setFetching())
            const res = await axios.get(`https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`, config);
            console.log(res.data);
            dispatch(setCurrentPost(res.data));
            dispatch(unsetFetching())

        }catch (e) {
            dispatch(unsetFetching())
            console.log(e);
        }
    }
}

export function createComment(postId, body){
    return async dispatch => {
        try{
            console.log(postId, body)
            const res = await axios.post(`https://bloggy-api.herokuapp.com/comments/`,{
                postId: +postId,
                body
                }
                , config);
            console.log(res.data, res.status);
            dispatch(setMessage(res.data));
        }catch (e) {
            dispatch(unsetFetching())
            console.log(e);
        }
    }
}


export function createNewPost(title, body){
    return async dispatch => {
        try{
            console.log(title, body)
            const res = await axios.post(`https://bloggy-api.herokuapp.com/posts`, {title, body}, config);
            console.log(res.data, res.status);
            dispatch(setNewPost(res.data));
        }catch (e) {
            dispatch(unsetFetching())
            console.log(e);
        }
    }
}


export function deletePost(id){
    return async dispatch => {
        try{
            const res = await axios.delete(`https://bloggy-api.herokuapp.com/posts/${id}`, config);
            console.log(res.data, res.status);
            dispatch(deleteingPost(id));
        }catch (e) {
            dispatch(unsetFetching())
            console.log(e);
        }
    }
}


export function updatePost(id, title, body){
    return async dispatch => {
        try{
            const res = await axios.put(`https://bloggy-api.herokuapp.com/posts/${id}`,{
                    title,
                    body
                }
                , config);
            console.log(res.data, res.status);
            dispatch(update(res.data));
        }catch (e) {
            dispatch(unsetFetching())
            console.log(e);
        }
    }
}
