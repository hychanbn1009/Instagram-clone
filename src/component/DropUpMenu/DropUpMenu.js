import React,{useEffect} from "react";
import "./DropUpMenu.scss";
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
        <div className="drop-up-menu">
            <ul className="drop-up-menu-content">
                <li onClick={()=>dispatch(logout())}>Log Out</li>
            </ul>
        </div>
    )
}

export default DropUpMenu;