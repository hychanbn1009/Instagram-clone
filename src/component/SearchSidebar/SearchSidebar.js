import React from "react";
import "./SearchSidebar.scss";

const SearchSidebar=({searchSidebarShow})=>{

    if (!searchSidebarShow){
        return null
    }

    return(
        <div className="search-sidebar">
            <h3>Search</h3>
            <input placeholder="Search"></input>
        </div>
    )
}

export default SearchSidebar;