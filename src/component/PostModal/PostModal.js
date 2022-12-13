import React,{useState} from "react";
import post1 from "../../assets/images/post/post1.jpg";
import icon from "../../assets/images/icon.jpg";
import dotdotdot from "../../assets/images/post/dotdotdot.svg";
import PostReactionList from "../PostReactionList/PostReactionList"
import "./PostModal.scss";

const PostDetailPage=()=>{

    return(
        <div className="post-detail-modal">
            <header className="profile-header">
                <div className="profile-information">
                    <img src={icon} className="profile-image"/>
                    <span>username</span>
                </div>
                <img src={dotdotdot} className="profile-menu"/>
            </header>
            <img src={post1} className="post-detail-image"/>
            <div className="post-detail-modal-body">
                <PostReactionList postContent={"ABC"} />
            </div>
        </div>
    )
}

export default PostDetailPage;