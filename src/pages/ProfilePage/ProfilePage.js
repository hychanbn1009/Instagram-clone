import React,{useEffect} from "react";
import icon from "../../assets/images/icon.jpg"
import dotdotdot from "../../assets/images/post/dotdotdot.svg"
import friendsSuggestion from "../../assets/images/profilePage/friendSuggestion.svg"
import ProfilePagePost from "../../component/ProfilePagePost/ProfilePagePost";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {profile,followUser,unfollowUser} from '../../thunk/postThunk';
import {updateUser} from "../../thunk/authThunk"
import {useLocation} from 'react-router-dom';
import { clearPostState } from "../../features/postSlice";
import "./ProfilePage.scss"

const ProfilePage=()=>{

    const dispatch = useDispatch();
    // const [currentUser,setCurrentUser]=useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const currentUser=(location.pathname.split("/")[1])

    const {profilePosts,loading,profileUser} = useSelector(
        (state) => state.post
    )

    const {user} = useSelector(
        (state) => state.auth
    )

    useEffect(()=>{
        const fetchData =async()=>{
            try{
                dispatch(profile({currentUser}))
            }catch(err){
                console.log(err)
            }
        }
        clearPostState()
        fetchData()
    },[dispatch,currentUser])

    const checkUserinFollowingList=()=>{
        if(profileUser=== null){
            return 0
        }
        else if(profileUser !== undefined  && profileUser[0].followers !== null){
            if(profileUser[0].followers.find(obj=>obj.username===user.username)){
                return true
            }
        }else{
            return 0
        }
    }

    const onClickFollow=async()=>{
        try{
            const [username,targetUser]=[user.username,currentUser]
            dispatch(followUser({username,targetUser})).then(
                dispatch(updateUser({username}))
            )
        }catch(err){
            console.log(err)
        }
    }

    const onClickUnfollow=async()=>{
        try{
            const [username,targetUser]=[user.username,currentUser]
            dispatch(unfollowUser({username,targetUser})).then(
                dispatch(updateUser({username}))
            )
        }catch(err){
            console.log(err)
        }
    }
    
    return(
        <div className="profile-page">
            {loading?<div className="loader"></div>:
            <div>
                <header className="profile">
                    <div className="profile-image">
                        <div className="profile-image-wrap">
                            <img src={icon} alt="icon"/>
                        </div>
                    </div>
                    <section className="profile-details">
                        <div className="profile-reaction">
                            <h2 className="userid">{currentUser}</h2>
                            {user.username===currentUser?
                            <button className="edit-button" onClick={()=>navigate(`/accounts/edit`)}>Edit Profile</button>
                            :
                            <>
                            {checkUserinFollowingList()}
                                {checkUserinFollowingList()?
                                <button className="unfollow-button" onClick={()=>onClickUnfollow()}>Unfollow</button>
                                :
                                <button className="follow-button" onClick={()=>onClickFollow()}>Follow</button>
                                }
                                <button className="message-button">Message</button>
                                <button className="suggestion-button"><img src={friendsSuggestion}/></button>
                                <img className="more-button" src={dotdotdot} alt="more"/>
                            </>
                            }
                        </div>
                        <ul>
                            <li><span>{profilePosts.length} </span>posts</li>
                            {profileUser?<li><a>{profileUser[0].followers.length} </a>followers</li>:<li><a>0</a>followers</li>}
                            {profileUser?<li><a>{profileUser[0].following.length} </a>following</li>:<li><a>0</a>following</li>}
                        </ul>
                        <span className="username">{currentUser}</span>
                        <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                        <a className="followed-by">Followed by</a>
                    </section>
                </header>
                <main className="profile-post-list">
                    {profilePosts?profilePosts.map(post=>{
                    return <ProfilePagePost likes={post.likes} photoLink={post.photoLink} profilePostContent={post.postContent} postId={post._id} timestamp={post.timestamp} likedUser={post.likedUser} author={post.author.username}/>
                    }):null}
                </main>
            </div>
            }
        </div>
    )
}

export default ProfilePage;