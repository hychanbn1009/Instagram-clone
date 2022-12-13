import React,{useEffect, useState} from "react";
import icon from "../../assets/images/icon.jpg"
import dotdotdot from "../../assets/images/post/dotdotdot.svg"
import friendsSuggestion from "../../assets/images/profilePage/friendSuggestion.svg"
import post1 from "../../assets/images/post/post1.jpg";
import ProfilePagePost from "../../component/ProfilePagePost/ProfilePagePost";
import { useSelector, useDispatch } from 'react-redux';
import {profile} from '../../thunk/postThunk';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { clearState } from "../../features/postSlice";
import "./ProfilePage.scss"

const ProfilePage=({username})=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentUser,setCurrentUser]=useState(null);

    const location = useLocation();

    const {profilePosts,loading} = useSelector(
        (state) => state.post
    )

    const fetchData =async()=>{
        const user=(location.pathname.slice(1))
        try{
            dispatch(profile({user}))
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        dispatch(clearState())
        fetchData()
    },[dispatch])

    const navigateToPost=({postId})=>{
        navigate(`${currentUser}/${postId}`)
    }

    return(
        <div className="profile-page">
            {loading?<div className="loader"></div>:
            <div>
                <header className="profile">
                    <div className="profile-image">
                        <div className="profile-image-wrap">
                            <img src={icon}/>
                        </div>
                    </div>
                    <section className="profile-details">
                        <div className="profile-reaction">
                            <h2 className="userid">User Id</h2>
                            <button className="follow-button">Follow</button>
                            <button className="message-button">Message</button>
                            <button className="suggestion-button"><img src={friendsSuggestion}/></button>
                            <img className="more-button" src={dotdotdot}/>
                        </div>
                        <ul>
                            <li><span>11 </span>posts</li>
                            <li><a>12 </a>followers</li>
                            <li><a>13 </a>following</li>
                        </ul>
                        <span className="username">{username}</span>
                        <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                        <a className="followed-by">Followed by</a>
                    </section>
                </header>
                {console.log(profilePosts)}
                {profilePosts?profilePosts.map(post=>{
                return <ProfilePagePost likes={post.likes} photoLink={post.photoLink} postId={post._id} currentUser={currentUser}/>
                }):null}
            </div>
            }
        </div>
    )
}

export default ProfilePage;