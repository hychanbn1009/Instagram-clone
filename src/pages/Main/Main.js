import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar"
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import ExplorePage from "../ExplorePage/ExplorePage";
import MessagesPage from "../MessagesPage/MessagesPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import TopNavbar from "../../component/TopNavbar/TopNavbar";
import "./Main.scss";
import {Routes, Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import BottomNavbar from "../../component/BottomNavbar/BottomNavbar";
import SearchSidebar from "../../component/SearchSidebar/SearchSidebar";

const Main =()=>{

    const { token,user } = useSelector(
        (state) => state.auth
    )

    const useAuth=()=>{
        const user=localStorage.getItem('user')
        if(user){
          return true
        } else {
          return false
        }
    }

    return(
        <div class="main-container"> 
            {token?
            <>
            <Sidebar className="sidebar"/>
            <TopNavbar className="navbar"/>
            </>
            :null}
            {useAuth()}
            <div className="content-container">
                {token?
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/explore" element={<ExplorePage/>}/>
                    <Route path="/direct/inbox" element={<MessagesPage/>}/>
                    <Route path="*" element={<p>Path not resolved</p>} />
                    <Route path="/profile" element={<ProfilePage username={user.username}/>} />
                    <Route path="/:username" element={<ProfilePage/>}/>
                    <Route path="/:username/:postId" element={<ProfilePage/>}/>
                    {/* <Route path="/search" element={<SearchSidebar searchSidebarShow={true}/>}/> */}
                    <Route path="/direct/inbox/:userId:friendId" element={<MessagesPage/>}/>
                </Routes>
                :
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/*" element={<LoginPage/>}/>
                </Routes>
                }
            </div>
            {token?<BottomNavbar className="navbar"/>:null}
        </div>
    )
}

export default Main;