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
import logoutIcon from "../../assets/images/sidebar/logout.svg";
import CreateModal from "../CreateModal/CreateModal";
import DropUpMenu from "../DropUpMenu/DropUpMenu";
import SearchSidebar from "../SearchSidebar/SearchSidebar";
import "./sidebar.scss"
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchState } from "../../features/searchSlice";
import { logout } from "../../features/authSlice";

const Sidebar =()=>{

    const [modalShow,setModalShow]=useState(false)
    const [dropUpMenuShow,setDropUpMenuShow]=useState(false)
    const [searchSidebarShow,setSearchSidebarShow]=useState(false)
    const dispatch = useDispatch();

    const {user} = useSelector(
        (state) => state.auth
    )

    const onCloseSearchSidebar=()=>{
        dispatch(clearSearchState())
        setSearchSidebarShow(false)
    }

    return(
        <>
        <CreateModal modalShow={modalShow} path="create" onClose={()=>setModalShow(false)} />
        <div className={"sideBar "+searchSidebarShow}>
            <ul className="logo">
            <Link to="/"><li><img src={instagram_word} className="App-word" alt="instagram"/><img src={instagram_logo} className="App-logo" alt="instagram"/></li></Link>
            </ul>
            <ul className="menu">
                <Link to="/"><li className="side-bar-li"><img src={home} className="side-bar-icon" alt="home"/><span className="side-bar-span">Home</span></li></Link>
                <li onClick={()=>setSearchSidebarShow(!searchSidebarShow)} className="side-bar-li"><img src={search} className="side-bar-icon" alt="search"/><span className="side-bar-span">Search</span></li>
                <Link to="/explore"><li className="side-bar-li"><img src={explore} className="side-bar-icon" alt="explore"/><span className="side-bar-span">Explore</span></li></Link>
                <Link to="/direct/inbox"><li className="side-bar-li"><img src={messages} className="side-bar-icon" alt="messages"/><span className="side-bar-span">Messages</span></li></Link>
                <li className="side-bar-li"><img src={notifications} className="side-bar-icon" alt="notifications"/><span className="side-bar-span">Notifications</span></li>
                <li onClick={()=>setModalShow(true)} className="side-bar-li"><img src={create} className="side-bar-icon" alt="create"/><span className="side-bar-span">Create</span></li>
                <Link to={`/${user.username}`}><li className="side-bar-li"><img src={icon} className="profile-icon" alt="icon"/><span className="side-bar-span">Profile</span></li></Link>
            </ul>
            <ul className="more-menu">
                {dropUpMenuShow?
                <li onClick={()=>dispatch(logout())} className={dropUpMenuShow?"side-bar-li isOpen":"side-bar-li isClose"}><img src={logoutIcon} className="side-bar-icon" alt="logout"/><span className="side-bar-span">Log Out</span></li>:
                null
                }        
                <li onClick={()=>setDropUpMenuShow(!dropUpMenuShow)} className="side-bar-li"><img src={more} className="side-bar-icon" alt="more"/><span className="side-bar-span">More</span></li>
            </ul>
        </div> 
        <SearchSidebar searchSidebarShow={searchSidebarShow} onCloseSearchSidebar={onCloseSearchSidebar}/>
        </>
    )
}

export default Sidebar;