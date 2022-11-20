import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar"
import MainPagePostList from "../../component/MainPagePostList/MainPagePostList";
import ProfilePage from "../ProfilePage/ProfilePage";
import "./main.scss";
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link,
  } from "react-router-dom";

const Main =()=>{
    return(
        <Router>
        <div class="main-container">
            <Sidebar/>
            <div className="content-container">
                <Routes >
                    <Route path="/" element={<MainPagePostList/>}/>
                    <Route path="/id" element={<ProfilePage/>}/>
                </Routes>
            </div>
        </div>
        </Router>

    )
}

export default Main;