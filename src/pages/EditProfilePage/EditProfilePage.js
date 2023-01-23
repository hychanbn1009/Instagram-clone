import React,{useState} from "react";
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

    return(
        <div className="edit-profile-page">
            <div className="edit-profile-container">
                {console.log(user)}
                <h1>Edit Profile</h1>
                <ul>
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
                        <input value={fullname} onChange={(event)=>setFullname(event.target.value)} className="profile-value-container"></input>
                    </li>
                    <li>
                        <span className="profile-description-container">Username</span>
                        <input value={username} onChange={(event)=>setUsername(event.target.value)} className="profile-value-container"></input>
                    </li>
                    <li>
                        <span className="profile-description-container">Bio</span>
                        <input value={bio} onChange={(event)=>setBio(event.target.value)} className="profile-value-container"></input>
                    </li>
                    <li>
                        <span className="profile-description-container">Email</span>
                        <input value={email} onChange={(event)=>setEmail(event.target.value)} className="profile-value-container"></input>
                    </li>
                </ul>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default EditProfilePage;