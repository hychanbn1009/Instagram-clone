import React from "react";
import "./DropUpMenu.scss";
import logoutIcon from "../../assets/images/sidebar/logout.svg";
import { useDispatch } from 'react-redux';
import { logout } from "../../features/authSlice";

const DropUpMenu =({dropUpMenuShow})=>{

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

// export default DropUpMenu;