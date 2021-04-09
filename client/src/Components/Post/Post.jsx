import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createComment, fetchPost} from "../../API/posts";
import "./Post.sass"
import Loader from "../Loader";
import Comment from "./Comment/Comment";
import {Link} from "react-router-dom";
import Popup from "../Main/Popup/Popup";
import {showPopup} from "../../Reducers/postsReducer";

const Post = (props) => {
    const dispatch = useDispatch();
    const [message, setMessage] = React.useState('');
    const id = props.location.pathname.split('/')[props.location.pathname.split('/').length -1];
    React.useEffect(()=>{
        dispatch(fetchPost(id));
    }, [])
    const isFetching = useSelector(state => state.post.isFetching);
    const post = useSelector(state => state.post.currentPost);
    const comments = post?.comments?.map(el => <Comment key={el.id} id={el.id} body={el.body}/>)

    const clickHandler = (e) => {
        dispatch(createComment(id, message))
    }

    const updataHandler = () => {
        dispatch(showPopup())
    }

    if(isFetching) return <Loader/>

    return (
        <div className="post">
            <Link className="close" to="/">X</Link>
            <Popup type={'update'} id={id} title={post.title} body={post.body}/>
            <button className="update" onClick={updataHandler}>Update</button>
            <div className="post__wrapper">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <h3>Comments</h3>
                <div className="comments__enter">
                    <textarea value={message} onChange={ e => setMessage(e.target.value) } placeholder="Type some comment here..."/>
                    <button onClick={clickHandler}>Send</button>
                </div>
                <div className="comments">
                    {comments}
                </div>
            </div>
        </div>
    );
};

export default Post;