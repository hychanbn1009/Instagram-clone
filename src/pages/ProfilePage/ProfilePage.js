import React,{useEffect, useState} from "react";
import icon from "../../assets/images/icon.jpg"
import dotdotdot from "../../assets/images/post/dotdotdot.svg"
import friendsSuggestion from "../../assets/images/profilePage/friendSuggestion.svg"
import ProfilePagePost from "../../component/ProfilePagePost/ProfilePagePost";
import { useSelector, useDispatch } from 'react-redux';
import {profile} from '../../thunk/postThunk';
import {useLocation} from 'react-router-dom';
import { clearState } from "../../features/postSlice";
import "./ProfilePage.scss"

const ProfilePage=()=>{

    const dispatch = useDispatch();
    // const [currentUser,setCurrentUser]=useState(null);

    const location = useLocation();
    const currentUser=(location.pathname.slice(1))

    const {profilePosts,loading,profileUser,followers} = useSelector(
        (state) => state.post
    )

    const {username} = useSelector(
        (state) => state.auth
    )

    useEffect(()=>{
        const fetchData =async()=>{
            try{
                dispatch(profile({currentUser})).then(
                    console.log(username,currentUser)
                )
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[dispatch])
    
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
                            <h2 className="userid">{currentUser}</h2>
                            {username===currentUser?
                            null
                            :
                            <>
                                <button className="follow-button">Follow</button>
                                <button className="message-button">Message</button>
                                <button className="suggestion-button"><img src={friendsSuggestion}/></button>
                                <img className="more-button" src={dotdotdot}/>
                            </>
                            }
                        </div>
                        <ul>
                            <li><span>{profilePosts.length} </span>posts</li>
                            <li><a>{followers.length} </a>followers</li>
                            <li><a>13 </a>following</li>
                        </ul>
                        <span className="username">{currentUser}</span>
                        <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                        <a className="followed-by">Followed by</a>
                    </section>
                </header>
                <main className="profile-post-list">
                    {console.log(profileUser)}
                    {profilePosts?profilePosts.map(post=>{
                    return <ProfilePagePost likes={post.likes} photoLink={post.photoLink} profilePostContent={post.postContent} postId={post._id} timestamp={post.timestamp}/>
                    }):null}
                </main>
            </div>
            }
        </div>
    )
}

export default ProfilePage;