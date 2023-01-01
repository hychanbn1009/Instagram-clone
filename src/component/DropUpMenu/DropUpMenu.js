import React,{useEffect} from "react";
import "./DropUpMenu.scss";
import logoutIcon from "../../assets/images/sidebar/logout.svg";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../features/authSlice";

const DropUpMenu =({dropUpMenuShow})=>{

    const { loading, error,token } = useSelector(
        (state) => state.auth
    )
    const navigate = useNavigate()
    const dispatch = useDispatch();

    if (!dropUpMenuShow){
        return null
    }

    return(
        <div className={dropUpMenuShow?"drop-up-menu isOpen":"drop-up-menu isClose"}>
            <ul className="drop-up-menu-content">
                <li onClick={()=>dispatch(logout())}><img src={logoutIcon} className="logout-icon"/><span className="dropupmenu-span">Log Out</span></li>
            </ul>
        </div>
    )
}

export default DropUpMenu;