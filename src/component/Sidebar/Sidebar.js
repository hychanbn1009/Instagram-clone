import React,{useState} from "react";
import instagram_word from "../../assets/images/sidebar/instagram_word.svg"
import home from "../../assets/images/sidebar/home.svg";
import search from "../../assets/images/sidebar/search.svg";
import explore from "../../assets/images/sidebar/explore.svg";
import messages from "../../assets/images/sidebar/messages.svg";
import notifications from "../../assets/images/sidebar/notifications.svg";
import create from "../../assets/images/sidebar/create.svg";
import more from "../../assets/images/sidebar/more.svg";
import icon from "../../assets/images/icon.jpg"
import instagram_logo from "../../assets/images/sidebar/instragram_logo.svg";
import CreateModal from "../CreateModal/CreateModal";
import DropUpMenu from "../DropUpMenu/DropUpMenu";
import "./sidebar.scss"
import {Link} from "react-router-dom";

const Sidebar =()=>{

    const [modalShow,setModalShow]=useState(false)
    const [dropUpMenuShow,setDropUpMenuShow]=useState(false)

    return(
        <>
        <CreateModal modalShow={modalShow} onClose={()=>setModalShow(false)}/>
        <div className="sideBar">
            <ul className="logo">
            <Link to="/"><li><img src={instagram_word} className="App-word" alt="instagram"/><img src={instagram_logo} className="App-logo" alt="instagram"/></li></Link>
            </ul>
            <ul className="menu">
                <Link to="/"><li><img src={home} className="side-bar-icon" alt="home"/><span className="side-bar-span">Home</span></li></Link>
                <li><img src={search} className="side-bar-icon" alt="search"/><span className="side-bar-span">Search</span></li>
                <Link to="/explore"><li><img src={explore} className="side-bar-icon" alt="explore"/><span className="side-bar-span">Explore</span></li></Link>
                <Link to="/direct/inbox"><li><img src={messages} className="side-bar-icon" alt="messages"/><span className="side-bar-span">Messages</span></li></Link>
                <li><img src={notifications} className="side-bar-icon" alt="notifications"/><span className="side-bar-span">Notifications</span></li>
                <li onClick={()=>setModalShow(true)}><img src={create} className="side-bar-icon" alt="create"/><span className="side-bar-span">Create</span></li>
                <Link to="/profile"><li><img src={icon} className="profile-icon" alt="icon"/><span className="side-bar-span">Profile</span></li></Link>
            </ul>
            <ul>
                <DropUpMenu dropUpMenuShow={dropUpMenuShow}/>
                <li onClick={()=>setDropUpMenuShow(!dropUpMenuShow)}><img src={more} className="side-bar-icon" alt="more"/><span className="side-bar-span">More</span></li>
            </ul>
        </div> 
        </>
    )
}

export default Sidebar;