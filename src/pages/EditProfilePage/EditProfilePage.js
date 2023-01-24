import React,{useState,useRef} from "react";
import { useSelector, useDispatch } from 'react-redux';
import icon from "../../assets/images/icon.jpg";
import "./EditProfilePage.scss";

const EditProfilePage =()=>{

    const {user} = useSelector(
        (state) => state.auth
    )

    const [username,setUsername]=useState(user.username)
    const [email,setEmail]=useState(user.email)
    const [bio,setBio]=useState(user.bio?user.bio:null)
    const [fullname,setFullname]=useState(user.fullname)
    const [textAreaHeight,setTextAreaHeight]=useState(1)
    const textAreaRef = useRef(null);

    const handleTextareaChange=(event)=>{ 
        setBio(event.target.value)
        let currentHeight= (textAreaRef.current.scrollHeight-29)/19+1
        if (currentHeight<6){
            setTextAreaHeight(currentHeight)
        }else{
            setTextAreaHeight(6)
        }
    } 

    return(
        <div className="edit-profile-page">
            <div className="edit-profile-container">
                <div className="selection-container">
                    <ul className="selection-list">
                        <li>Edit Profile</li>
                        <li>Change password</li>
                        <li>Apps and websites</li>
                        <li>Email notifications</li>
                        <li>Push notifications</li>
                        <li>Manage contacts</li>
                        <li>Privacy and security</li>
                        <li>Ads</li>
                        <li>Supervision</li>
                        <li>Login activity</li>
                        <li>Emails from Instagram</li>
                        <li>Help</li>
                        <li>Digital collectibles</li>
                    </ul>
                </div>
                <div className="selection-details-container">
                    <ul className="selection-details-list">
                        <li>
                            <div className="profile-description-container">
                                <img src={icon} className="profile-image"/>
                            </div>
                            <div className="profile-value-container">
                                <div className="username-container">
                                    <span>{user.username}</span>
                                    <span className="change-username-text">Change profile photo</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span className="profile-description-container">Name</span>
                            <div className="profile-value-container">
                                <input value={fullname} onChange={(event)=>setFullname(event.target.value)}></input>
                                <small>Help people discover your account by using the name that you're known by: either your full name, nickname or business name.</small>
                                <small>You can only change your name twice within 14 days.</small>
                            </div>
                        </li>
                        <li>
                            <span className="profile-description-container">Username</span>
                            <div className="profile-value-container">
                                <input value={username} onChange={(event)=>setUsername(event.target.value)}></input>
                                <small>In most cases, you'll be able to change your username back to fishball_yuen for another 14 days. Learn more</small>
                            </div>
                        </li>
                        <li>
                            <span className="profile-description-container">Bio</span>
                            <div className="profile-value-container">
                                <textarea 
                                value={bio} 
                                onChange={(event)=>handleTextareaChange(event)}
                                rows={textAreaHeight}
                                ref={textAreaRef}
                                 ></textarea>
                                <small>{bio.length} / 150</small>
                            </div>
                        </li>
                        <li>
                            <span className="profile-description-container">Email</span>
                            <div className="profile-value-container">
                            <input value={email} onChange={(event)=>setEmail(event.target.value)} ></input>
                            </div>
                        </li>
                    </ul>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage;