import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { searchUserList } from "../../thunk/searchThunk";
import searchImage from "../../assets/images/sidebar/search.svg";
import iconImage from "../../assets/images/icon.jpg"

import "./SearchSidebar.scss";

const SearchSidebar=({searchSidebarShow,onCloseSearchSidebar})=>{

    const [searchTarget,setSearchTarget]=useState("");
    const dispatch = useDispatch();

    const handleSubmit = async() => {
        try{
            dispatch(searchUserList({searchTarget}))
        } catch(err){
            console.log(err)
        }
    }

    const {searchedUserList} = useSelector(
        (state) => state.search
    )

    if (!searchSidebarShow){
        return null
    }

    return(
        <div className="search-sidebar-background" onClick={()=>onCloseSearchSidebar(false)}>
            <div className={searchSidebarShow?"search-sidebar isOpen":"search-sidebar isClose"} onClick={event=>event.stopPropagation()}>
                <div className="search-sidebar-content">
                    <h3>Search</h3>
                    <div className="search-input-group">
                        <input placeholder="Search" className="search-input-field" value={searchTarget} onChange={(event)=>{setSearchTarget(event.target.value)}}></input>
                        <img src={searchImage} className="search-button" alt="search-button" onClick={()=>handleSubmit()}/>
                    </div>
                </div>
                <div className="search-sidebar-result">
                    {searchedUserList.map(user=>
                        <div className="profile-container">
                            <img src={iconImage}/>
                            <div className="user-details">
                                <span className="userid">{user.username}</span>
                                <span className="username">{user.fullname}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchSidebar;