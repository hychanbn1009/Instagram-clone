import React from "react";
import post1 from "../../assets/images/post/post1.jpg";
import like from "../../assets/images/post/like.svg"
import comment from "../../assets/images/post/comment.svg"
import "./ProfilePagePost.scss"

const ProfilePagePost=()=>{
    return(
        <main className="profile-post-list">
            <div className="photo-cover">
                <img src={post1}/>
                <div className="photo-cover-text">
                    <span><img src={like}/>123</span>
                    <span><img src={comment}/>12</span>
                </div>
            </div>
            <div className="photo-cover">
                <img src={post1}/>
                <div className="photo-cover-text">
                    <span><img src={like}/>123</span>
                    <span><img src={comment}/>12</span>
                </div>
            </div>
            <div className="photo-cover">
                <img src={post1}/>
                <div className="photo-cover-text">
                    <span><img src={like}/>123</span>
                    <span><img src={comment}/>12</span>
                </div>
            </div>
            <div className="photo-cover">
                <img src={post1}/>
                <div className="photo-cover-text">
                    <span><img src={like}/>123</span>
                    <span><img src={comment}/>12</span>
                </div>
            </div>
        </main>
    )
}

export default ProfilePagePost;