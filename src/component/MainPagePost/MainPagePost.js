import React,{useState} from "react";
import icon from "../../assets/images/icon.jpg";
import dotdotdot from "../../assets/images/post/dotdotdot.svg";
import emotion from "../../assets/images/post/emotion.svg";
import dayjs from "dayjs";
import "./mainPagePost.scss"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import PostReactionList from "../PostReactionList/PostReactionList";
import {createComment} from '../../thunk/postThunk';
const relativeTime = require('dayjs/plugin/relativeTime');

const Post =({author,photoLink,postContent,timestamp,postId,likedUser})=>{

    dayjs.extend(relativeTime)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user} = useSelector(
        (state) => state.auth
    )

    const [commentContent,setCommentContent]=useState("")

    const submitComment=async()=>{
        try{
            const authorId = user.id
            dispatch(createComment({commentContent,authorId,postId}))
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="post">
            <div className="post-header">
                <div className="user-icon-wrap">
                    <img src={icon} className="user-icon" alt="user-icon"/>
                </div>
                <div className="post-writer-info">
                    <span className="username" onClick={()=>{navigate(`/${author}`)}}>
                        {author}
                    </span>
                    <span className="location">
                        location
                    </span>
                </div>
                <img src={dotdotdot} className="more-icon" alt="more"/>
            </div>
            <img src={photoLink} className="post-photo" alt="post"/>
            <PostReactionList profilePostContent={postContent} timestamp={timestamp} author={author} postId={postId} likedUser={likedUser}/>
            <span className="breakline"></span>
            <div className="post-details">
                <div className="post-reaction-container">
                    <div className="post-reaction-left">
                        <img src={emotion} alt="emotion"/>
                        <textarea placeholder="Add a comment..." value={commentContent} onChange={(event)=>setCommentContent(event.target.value)}></textarea>
                    </div>
                    <button 
                    disabled={commentContent?false:true}
                    onClick={()=>submitComment()}>Post</button>
                </div>
            </div>
        </div>
    )
}

export default Post;