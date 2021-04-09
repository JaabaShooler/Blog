import React from 'react';
import "./Popup.sass"
import {useDispatch, useSelector} from "react-redux";
import {hidePopup} from "../../../Reducers/postsReducer";
import {createNewPost, updatePost} from "../../../API/posts";


const Popup = (props) => {
    const  [title, setTitle] = React.useState(props.title ? props.title : "");
    const  [body, setBody] = React.useState(props.body ? props.body : "");
    const display = useSelector(state => state.post.popupDisplay)
    const dispatch = useDispatch();

    function createPost(){
        dispatch( hidePopup())
        dispatch(createNewPost(title, body))
    }

    function updateHandler(){
        dispatch( hidePopup())
        dispatch(updatePost(props.id, title, body))
    }

    return (
        <div className="popup" onClick={()=> dispatch(hidePopup())} style={{opacity: display, zIndex: display == 0 ? -1 : 1000}}>
            <div className="popup__content" onClick={e => e.stopPropagation()}>
                <div className="popup__header">
                    <h3 className="popup__title">{props.type == 'create' ? "Create a new post" : "Update a post"}</h3>
                    <button className="popup__close" onClick={()=> dispatch(hidePopup())} >X</button>
                </div>
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter a title"/>
                <textarea value={body} onChange={e => setBody(e.target.value)} type="text" placeholder="Enter a body"/>
                {
                    props.type == 'create' ?
                    <button className="button popup__create" onClick={() => createPost()}>Create</button>
                    :
                    <button className="button popup__create" onClick={() => updateHandler()}>Update</button>

                }
            </div>
        </div>
    );
};

export default Popup;