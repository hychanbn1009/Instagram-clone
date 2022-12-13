import React,{useEffect} from "react";
import post1 from "../../assets/images/post/post1.jpg";
import like from "../../assets/images/post/like.svg"
import comment from "../../assets/images/post/comment.svg"
import {useSelector} from 'react-redux';
import {profile} from '../../thunk/postThunk';
import {useNavigate} from "react-router-dom";

import "./ProfilePagePost.scss"

const ProfilePagePost=({likes,photoLink,postId})=>{

    const navigate = useNavigate();

    const {username} = useSelector(
        (state) => state.auth
    )

    const handleClick=()=>{
        navigate(`/${username}/${postId}`)
    }

    return(
        <main className="profile-post-list">
            <div className="photo-cover" onClick={()=>handleClick()}>
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