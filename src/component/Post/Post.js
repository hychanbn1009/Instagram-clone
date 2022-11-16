import React from "react";
import icon from "../../assets/images/icon.jpg";
import dotdotdot from "../../assets/images/post/dotdotdot.svg";
import like from "../../assets/images/post/like.svg";
import forward from "../../assets/images/post/forward.svg";
import comment from "../../assets/images/post/comment.svg";
import save from "../../assets/images/post/save.svg";
import emotion from "../../assets/images/post/emotion.svg";
import post1 from "../../assets/images/post/post1.jpg";
import "./post.scss"

const Post =()=>{
    return(
        <div className="post">
            <div className="post-header">
                <div className="user-icon-wrap">
                    <img src={icon} className="user-icon" alt="user-icon"/>
                </div>
                <div className="post-writer-info">
                    <span className="username">
                        username
                    </span>
                    <span className="location">
                        location
                    </span>
                </div>
                <img src={dotdotdot} className="more-icon" alt="more"/>
            </div>
            <img src={post1} className="post-photo" alt="post"/>
            <div className="post-details">
                <div className="post-reaction-list">
                    <div className="post-reaction-left">
                        <img src={like} alt="like"/>
                        <img src={comment} alt="comment"/>
                        <img src={forward} alt="forward"/>
                    </div>
                    <img src={save} alt="save"/>
                </div>
                <div className="post-like-list">
                    <img src={icon} alt="icon"/>
                    &nbsp;Liked by&nbsp;
                    <span>
                        aaa
                    </span>
                    &nbsp;and&nbsp;
                    <span>
                        1,561 others
                    </span>
                </div>
                <div className="post-content">
                    <span>
                        username
                    </span>
                    &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="post-comments">
                </div>
                <small className="time-stamp">
                    1 DAY AGO
                </small>
                <div className="post-reaction-container">
                    <div className="post-reaction-left">
                        <img src={emotion} alt="emotion"/>
                        <span>Add a comment...</span>
                    </div>
                    <span>Post</span>
                </div>
            </div>
        </div>
    )
}

export default Post;