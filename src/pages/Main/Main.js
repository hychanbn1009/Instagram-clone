import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar"
import MainPagePostList from "../../component/MainPagePostList/MainPagePostList";
import ProfilePage from "../ProfilePage/ProfilePage";
import ExplorePage from "../ExplorePage/ExplorePage";
import MessagesPage from "../MessagesPage/MessagesPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import "./Main.scss";
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
                    <Route path="/explore" element={<ExplorePage/>}/>
                    <Route path="/direct/inbox" element={<MessagesPage/>}/>
                    <Route path="/direct/inbox" element={<MessagesPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                </Routes>
            </div>

        </div>
        </Router>

    )
}

export default Main;