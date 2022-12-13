import React from "react";
import icon from "../../assets/images/icon.jpg";
import dotdotdot from "../../assets/images/post/dotdotdot.svg";
import like from "../../assets/images/post/like.svg";
import forward from "../../assets/images/post/forward.svg";
import comment from "../../assets/images/post/comment.svg";
import save from "../../assets/images/post/save.svg";
import emotion from "../../assets/images/post/emotion.svg";
import post1 from "../../assets/images/post/post1.jpg";
import dayjs from "dayjs";
import "./mainPagePost.scss"
import { useNavigate } from "react-router-dom";
import PostReactionList from "../PostReactionList/PostReactionList"
const relativeTime = require('dayjs/plugin/relativeTime');

const Post =({username,photoLink,postContent,timestamp})=>{

    dayjs.extend(relativeTime)
    const navigate = useNavigate();

    return(
        <div className="post">
            <div className="post-header">
                <div className="user-icon-wrap">
                    <img src={icon} className="user-icon" alt="user-icon"/>
                </div>
                <div className="post-writer-info">
                    <span className="username" onClick={()=>{navigate(`/${username}`)}}>
                        {username}
                    </span>
                    <span className="location">
                        location
                    </span>
                </div>
                <img src={dotdotdot} className="more-icon" alt="more"/>
            </div>
            <img src={photoLink} className="post-photo" alt="post"/>
            {/* <div className="post-details">
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
                    &nbsp;{postContent}
                </div>
                <div className="post-comments">
                </div>
                <small className="time-stamp">
                    {dayjs(timestamp).fromNow()}
                </small>
            </div> */}
            <PostReactionList postContent={postContent} timestamp={timestamp}/>
            <span className="breakline"></span>
            <div className="post-details">
                <div className="post-reaction-container">
                    <div className="post-reaction-left">
                        <img src={emotion} alt="emotion"/>
                        <textarea placeholder="Add a comment..."></textarea>
                    </div>
                    <button disabled>Post</button>
                </div>
            </div>
        </div>
    )
}

export default Post;