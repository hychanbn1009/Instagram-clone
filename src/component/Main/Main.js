import React from "react";
import Sidebar from "../Sidebar/Sidebar"
import Storybar from "../Storybar/Storybar";
import Post from "../Post/Post";
import "./main.scss"

const Main =()=>{
    return(
        <div class="main-container">
            <Sidebar/>
            <div className="main">
                <Storybar/>
                <Post/>
            </div>
        </div>
    )
}

export default Main;