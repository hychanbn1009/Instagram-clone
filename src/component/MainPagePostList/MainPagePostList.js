import React from "react";
import Storybar from "../Storybar/Storybar";
import MainPagePost from "../MainPagePost/MainPagePost";
import SuggestList from "../SuggestList/SuggestList";
import "./MainPagePostList.scss"

const MainPagePostList=()=>{
    return(
        <>
            <div className="post-container">
                <Storybar/>
                <MainPagePost/>
                <MainPagePost/>
                <MainPagePost/>
                <MainPagePost/>
            </div>
            <SuggestList/>
        </>
    )
}

export default MainPagePostList;