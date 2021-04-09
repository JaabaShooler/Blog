import React from 'react';
import "./Comment.sass"

const Comment = (props) => {
    return (
        <div className="comment">
            <p>
                {props.body}
            </p>
        </div>
    );
};

export default Comment;