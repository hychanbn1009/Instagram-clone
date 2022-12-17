import React from "react";
import like from "../../assets/images/post/like.svg";
import forward from "../../assets/images/post/forward.svg";
import comment from "../../assets/images/post/comment.svg";
import save from "../../assets/images/post/save.svg";
import icon from "../../assets/images/icon.jpg";
import dayjs from "dayjs";
import "./PostReactionList.scss"
const relativeTime = require('dayjs/plugin/relativeTime');

const PostReactionList=({profilePostContent,timestamp,username})=>{
    return(
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
                        {username}
                    </span>
                    &nbsp;{profilePostContent}
                </div>
                <div className="post-comments">
                </div>
                <small className="time-stamp">
                    {dayjs(timestamp).fromNow()}
                </small>
        </div>
    )
}

export default PostReactionList;