import React,{useState} from "react";
import Sidebar from "../../component/Sidebar/Sidebar"
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import ExplorePage from "../ExplorePage/ExplorePage";
import MessagesPage from "../MessagesPage/MessagesPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import CreateModal from "../../component/CreateModal/CreateModal";
import "./Main.scss";
import {Routes, Route, Navigate  } from "react-router-dom";
import { useSelector } from 'react-redux';
import {get} from '../../thunk/postThunk';

const Main =()=>{

    const { token,username } = useSelector(
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
            {token?<Sidebar/>:null}
            {useAuth()}
            <div className="content-container">
                {token?
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/explore" element={<ExplorePage/>}/>
                    <Route path="/direct/inbox" element={<MessagesPage/>}/>
                    <Route path="*" element={<p>Path not resolved</p>} />
                    <Route path="/profile" element={<ProfilePage username={username}/>} />
                    <Route path="/:username" element={<ProfilePage/>}/>
                    <Route path="/:username/:postId" element={<ProfilePage/>}/>
                </Routes>
                :
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/*" element={<LoginPage/>}/>
                </Routes>
                }
            </div>
        </div>
    )
}

export default Main;