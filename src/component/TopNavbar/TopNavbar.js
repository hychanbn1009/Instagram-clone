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
import "./TopNavbar.scss";

const TopNavbar =()=>{

    const [modalShow,setModalShow]=useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <>
        <div className="top-navbar-container">
            <ul className="logo">
            <Link to="/"><li><img src={instagram_logo} className="App-logo" alt="instagram"/></li></Link>
            </ul>
            <ul className="menu">
                <input/>
                <li onClick={()=>navigate()} className="nav-bar-li"><img src={search} className="nav-bar-icon" alt="search"/><span className="nav-bar-span">Search</span></li>
            </ul>
        </div> 
        <CreateModal modalShow={modalShow} path="create" onClose={()=>setModalShow(false)} />
        </>
    )
}

export default TopNavbar;