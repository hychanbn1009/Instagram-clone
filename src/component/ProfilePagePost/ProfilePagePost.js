import React,{useEffect} from "react";
import post1 from "../../assets/images/post/post1.jpg";
import like from "../../assets/images/post/like.svg"
import comment from "../../assets/images/post/comment.svg"
import { useSelector, useDispatch } from 'react-redux';
import {profile} from '../../thunk/postThunk';
import "./ProfilePagePost.scss"

const ProfilePagePost=({likes,photoLink})=>{

    return(
        <main className="profile-post-list">
            <div className="photo-cover">
                <img src={photoLink}/>
                <div className="photo-cover-text">
                    <span><img src={like}/>{likes}</span>
                    <span><img src={comment}/>12</span>
                </div>
            </div>
        </main>
    )
}

export default ProfilePagePost;