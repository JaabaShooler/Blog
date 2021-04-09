import React, {useEffect} from 'react';
import "./Main.sass"
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../API/posts";
import PostElement from "./Post/PostElement";
import Loader from "../Loader";
import {showPopup} from "../../Reducers/postsReducer";
import Popup from "./Popup/Popup";

const Main = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.post.isFetching)
    const posts = useSelector(state => state.post.posts).map(el =>
            <PostElement id={el.id} key={el.id} title={el.title} body={el.body} />
        )
    useEffect(() => {
        dispatch(fetchPosts());
    },[])


    const clickHandler = () => {
        dispatch(showPopup())
    }

    if(isFetching) return <Loader/>

    return (

        <div className="main">
            <div className="buttons">
                <Popup type={'create'}/>
                <button onClick={clickHandler}> Create a new post </button>
            </div>
            <div className="posts">
                {posts}
            </div>
        </div>
    );
};

export default Main;