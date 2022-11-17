import React from "react";
import Sidebar from "../Sidebar/Sidebar"
import Storybar from "../Storybar/Storybar";
import Post from "../Post/Post";
import "./main.scss"
import SuggestList from "../SuggestList/SuggestList";

const Main =()=>{
    return(
        <div class="main-container">
            <Sidebar/>
            <div className="content-container">
                <div className="post-container">
                    <Storybar/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
                <SuggestList/>
            </div>
        </div>
    )
}

export default Main;