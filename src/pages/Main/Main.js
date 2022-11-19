import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar"
import Storybar from "../../component/Storybar/Storybar";
import MainPagePost from "../../component/MainPagePost/MainPagePost";
import SuggestList from "../../component/SuggestList/SuggestList";
import ProfilePage from "../ProfilePage/ProfilePage";
import "./main.scss"

const Main =()=>{
    return(
        <div class="main-container">
            <Sidebar/>
            <div className="content-container">
                {/* <div className="post-container">
                    <Storybar/>
                    <MainPagePost/>
                    <MainPagePost/>
                    <MainPagePost/>
                    <MainPagePost/>
                </div>
                <SuggestList/> */}
                <ProfilePage/>
            </div>
        </div>
    )
}

export default Main;