import React from "react";
import instagram_word from "../../assets/images/sidebar/instagram_word.svg"
import home from "../../assets/images/sidebar/home.svg";
import search from "../../assets/images/sidebar/search.svg";
import explore from "../../assets/images/sidebar/explore.svg";
import messages from "../../assets/images/sidebar/messages.svg";
import notifications from "../../assets/images/sidebar/notifications.svg";
import create from "../../assets/images/sidebar/create.svg";
import more from "../../assets/images/sidebar/more.svg";
import icon from "../../assets/images/icon.jpg"
import "./sidebar.scss"

const Sidebar =()=>{
    return(
        <div className="sideBar">
            <ul className="logo">
            <li><img src={instagram_word} className="App-word" alt="instagram"/></li>
            </ul>
            <ul className="menu">
                <div>
                <li><img src={home} className="App-word" alt="home"/><span>Home</span></li>
                </div>
                <div>
                <li><img src={search} className="App-word" alt="search"/><span>Search</span></li>
                </div>
                <li><img src={explore} className="App-word" alt="explore"/><span>Explore</span></li>
                <li><img src={messages} className="App-word" alt="messages"/><span>Messages</span></li>
                <li><img src={notifications} className="App-word" alt="notifications"/><span>Notifications</span></li>
                <li><img src={create} className="App-word" alt="create"/><span>Create</span></li>
                <li><img src={icon} className="profile-icon" alt="icon"/><span>Profile</span></li>
            </ul>
            <ul>
                <li><img src={more} className="App-word" alt="more"/><span>More</span></li>
            </ul>
        </div> 
    )
}

export default Sidebar;