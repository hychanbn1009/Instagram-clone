import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { searchUserList } from "../../thunk/searchThunk";
import searchImage from "../../assets/images/sidebar/search.svg";
import iconImage from "../../assets/images/icon.jpg"
import {useNavigate} from "react-router-dom";

import "./SearchSidebar.scss";

const SearchSidebar=({searchSidebarShow,onCloseSearchSidebar})=>{

    const [searchTarget,setSearchTarget]=useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async() => {
        try{
            dispatch(searchUserList({searchTarget}))
        } catch(err){
            console.log(err)
        }
    }

    const {searchedUserList,loading,success} = useSelector(
        (state) => state.search
    )

    const loadingSkeleton=()=>{
        let loadingSkeletonUserList=[]
        for(let i=1;i<6;i++){
            loadingSkeletonUserList.push(
                <div className="profile-container">
                    <div className="user-icon-wrap skeleton">
                    </div>
                    <div className="user-details">
                        <span className="userid skeleton skeleton-text skeleton-text-body"></span>
                        <span className="username skeleton skeleton-text skeleton-text-body"></span>
                    </div>
                </div>
            )
        }
        return loadingSkeletonUserList
    }

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
                    {loading?
                        loadingSkeleton():
                        searchedUserList.map(user=>
                            <div className="profile-container active" onClick={()=>{navigate(`/${user.fullname}`)}}>
                                <img src={iconImage} className="user-icon"/>
                                <div className="user-details">
                                    <span className="userid">{user.username}</span>
                                    <span className="username">{user.fullname}</span>
                                </div>
                            </div>
                        )
                    }
                    {!loading && success && searchedUserList.length===0?
                    <div className="search-sidebar-result-fail-message-container">
                    <span className="search-sidebar-result-fail-message">No results found.</span>
                    </div>:
                    null}
                </div>
            </div>
        </div>
    )
}

export default SearchSidebar;