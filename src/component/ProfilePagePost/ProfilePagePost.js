import React,{useState} from "react";
import post1 from "../../assets/images/post/post1.jpg";
import like from "../../assets/images/post/like.svg"
import comment from "../../assets/images/post/comment.svg"
import {useSelector} from 'react-redux';
import {profile} from '../../thunk/postThunk';
import {useNavigate} from "react-router-dom";
import "./ProfilePagePost.scss"
import CreateModal from "../CreateModal/CreateModal";

const ProfilePagePost=({likes,photoLink,postId,profilePostContent,timestamp,likedUser,author})=>{

    const navigate = useNavigate();

    const [modalShow,setModalShow]=useState(false)

    const handleClick=()=>{
        navigate(`/${author}/${postId}`)
        setModalShow(true)
    }

    return(
        <div className="profile-page-post">
        <CreateModal modalShow={modalShow} 
        path="profile" 
        onClose={()=>setModalShow(false)} 
        username={author} 
        profilePhotoLink={photoLink} 
        profilePostContent={profilePostContent} 
        timestamp={timestamp} 
        postId={postId}
        likedUser={likedUser}
        />
        <div className="photo-cover" onClick={()=>handleClick()}>
            <img src={photoLink}/>
            <div className="photo-cover-text">
                <span><img src={like}/>{likes}</span>
                <span><img src={comment}/>12</span>
            </div>
        </div>
        </div>

    )
}

export default ProfilePagePost;