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
import SearchSidebar from "../SearchSidebar/SearchSidebar";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchState } from "../../features/searchSlice";
import "./BottomNavbar.scss";

const BottomNavbar =()=>{

    const [modalShow,setModalShow]=useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user} = useSelector(
        (state) => state.auth
    )

    return(
        <>
        <div className="bottom-navbar-container">
            <ul className="menu">
                <li className="bottom-navbar-li"><Link to="/"><img src={home} className="side-bar-icon" alt="home"/></Link></li>
                <li className="bottom-navbar-li"><Link to="/explore"><img src={explore} className="side-bar-icon" alt="explore"/></Link></li>
                <li className="bottom-navbar-li"><Link to="/direct/inbox"><img src={messages} className="bottom-navbar-icon" alt="messages"/></Link></li>
                {/* <li className="bottom-navbar-li"><img src={notifications} className="side-bar-icon" alt="notifications"/></li> */}
                <li onClick={()=>setModalShow(true)} className="bottom-navbar-li"><img src={create} className="side-bar-icon" alt="create"/></li>
                <li className="bottom-navbar-li"><Link to={`/${user.username}`}><img src={icon} className="profile-icon" alt="icon"/></Link></li>
            </ul>
        </div> 
        </>
    )
}

export default BottomNavbar;