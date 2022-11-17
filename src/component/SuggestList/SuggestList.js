import React from "react";
import icon from "../../assets/images/icon.jpg"
import "./suggestList.scss"

const SuggestList=()=>{
    return(
        <div className="suggest-list">
            <div className="profile-container">
                <img src={icon}/>
                <div className="user-details">
                    <span className="userid">kyle_chan</span>
                    <span className="username">Kyle Chan</span>
                </div>
                <button>Switch</button>
            </div>
            <div className="suggestion-text-container">
                <span>Suggestions For You</span>
                <a>See All</a>
            </div>
            <div className="suggestion-friends-list">
                <div className="suggestion-container">
                    <img src={icon}/>
                    <div className="user-details">
                        <span className="userid">abc</span>
                        <small>Followed by aaa</small>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="suggestion-container">
                    <img src={icon}/>
                    <div className="user-details">
                        <span className="userid">abc</span>
                        <small>Followed by aaa</small>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="suggestion-container">
                    <img src={icon}/>
                    <div className="user-details">
                        <span className="userid">abc</span>
                        <small>Followed by aaa</small>
                    </div>
                    <button>Follow</button>
                </div>
            </div>
        </div>
    )
}

export default SuggestList