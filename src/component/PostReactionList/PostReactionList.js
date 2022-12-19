import React from "react";
import like from "../../assets/images/post/like.svg";
import forward from "../../assets/images/post/forward.svg";
import comment from "../../assets/images/post/comment.svg";
import save from "../../assets/images/post/save.svg";
import icon from "../../assets/images/icon.jpg";
import dayjs from "dayjs";
import "./PostReactionList.scss"
const relativeTime = require('dayjs/plugin/relativeTime');

const PostReactionList=({profilePostContent,timestamp,username,postId,likedUser})=>{

    const checkLikedUser=()=>{
        if (likedUser.length>0 ){
            return likedUser[0].username
        }else{
            return null
        }
    }

    return(
        <div className="post-details" id={postId}>
                <div className="post-reaction-list">
                    <div className="post-reaction-left">
                        <img src={like} alt="like" onClick={(event)=>console.log(postId)}/>
                        <img src={comment} alt="comment"/>
                        <img src={forward} alt="forward"/>
                    </div>
                    <img src={save} alt="save"/>
                </div>
                <div className="post-like-list">
                    {likedUser.length>0?
                        <>
                        <img src={icon} alt="icon"/>
                        &nbsp;Liked by&nbsp;
                        <span>
                            {`${checkLikedUser()}`}
                        </span>
                        {likedUser.length>1?<>&nbsp;and&nbsp;</>:null}
                        <span>
                            {likedUser.length>1?`${likedUser.length} others`:null}
                        </span>
                        </>
                    :null
                    }
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