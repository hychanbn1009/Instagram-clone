import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { searchUserList} from "../../thunk/searchThunk";
import search from "../../assets/images/sidebar/search.svg";
import "./SearchSidebar.scss";

const SearchSidebar=({searchSidebarShow,setSearchSidebarShow})=>{

    const [searchTarget,setSearchTarget]=useState("");
    const dispatch = useDispatch();

    const handleSubmit = async() => {
        try{
            dispatch(searchUserList({searchTarget}))
        } catch(err){
            console.log(err)
        }
    }

    if (!searchSidebarShow){
        return null
    }

    return(
        <div className="search-sidebar-background" onClick={()=>setSearchSidebarShow(false)}>
            <div className={searchSidebarShow?"search-sidebar isOpen":"search-sidebar isClose"} onClick={event=>event.stopPropagation()}>
                <div className="search-sidebar-content">
                    <h3>Search</h3>
                    <div className="search-input-group">
                        <input placeholder="Search" className="search-input-field" value={searchTarget} onChange={(event)=>{setSearchTarget(event.target.value)}}></input>
                        <img src={search} className="search-button" alt="search-button"/>
                    </div>
                </div>
                <div className="search-sidebar-result">

                </div>
            </div>
        </div>
    )
}

export default SearchSidebar;