import React from "react";
import likeButton from "../../assets/images/post/like.svg";
import forward from "../../assets/images/post/forward.svg";
import comment from "../../assets/images/post/comment.svg";
import save from "../../assets/images/post/save.svg";
import icon from "../../assets/images/icon.jpg";
import liked from "../../assets/images/post/liked.svg";
import dayjs from "dayjs";
import {likePost,unlikePost} from '../../thunk/postThunk';
import {useDispatch,useSelector} from 'react-redux';
import "./PostReactionList.scss"
const relativeTime = require('dayjs/plugin/relativeTime');

const PostReactionList=({profilePostContent,timestamp,author,postId,likedUser})=>{

    const dispatch = useDispatch();

    const { user } = useSelector(
        (state) => state.auth
    )

    const username=user.username

    const checkLikedUser=()=>{
        console.log(likedUser[0].username)
        if (likedUser.length>0){
            return likedUser[0].username
        }else{
            return null
        }
    }

    const onClicklikePost=async()=>{
        try{
            dispatch(likePost({username,postId}))
        }catch(err){
            console.log(err)
        }
    }

    const onClickUnlikePost=async()=>{
        try{
            dispatch(unlikePost({username,postId}))
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="post-details" id={postId}>
                <div className="post-reaction-list">
                    <div className="post-reaction-left">
                        {likedUser.find(object=>object.username===username)?
                            <img src={liked} alt="liked" onClick={(event)=>onClickUnlikePost()}/>
                            :
                            <img src={likeButton} alt="like" onClick={(event)=>onClicklikePost()}/>
                        }
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
                            {likedUser.length>1?`${likedUser.length-1} others`:null}
                        </span>
                        </>
                    :null
                    }
                </div>
                <div className="post-content">
                    <span>
                        {author}
                    </span>
                    &nbsp;{profilePostContent}
                </div>
                <div className="post-comments">
                    <span>
                        Hello!
                    </span>
                    &nbsp;It's me
                </div>
                <small className="time-stamp">
                    {dayjs(timestamp).fromNow()}
                </small>
        </div>
    )
}

export default PostReactionList;