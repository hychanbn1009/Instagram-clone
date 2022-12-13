import React,{useEffect} from "react";
import Sidebar from "../../component/Sidebar/Sidebar"
import MainPagePostList from "../../component/MainPagePostList/MainPagePostList";
import ProfilePage from "../ProfilePage/ProfilePage";
import ExplorePage from "../ExplorePage/ExplorePage";
import MessagesPage from "../MessagesPage/MessagesPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import "./Main.scss";
import {Routes, Route,} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {get} from '../../thunk/postThunk';
import PostDetailPage from "../PostDetailPage/PostDetailPage";

const Main =()=>{

    const { token,username } = useSelector(
        (state) => state.auth
    )

    return(
        <div class="main-container"> 
            {token?<Sidebar/>:null}
            <div className="content-container">
                {token?
                ( 
                <>
                <Routes>
                    <Route path="/" element={<MainPagePostList/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/explore" element={<ExplorePage/>}/>
                    <Route path="/direct/inbox" element={<MessagesPage/>}/>
                    <Route path="/direct/inbox" element={<MessagesPage/>}/>
                    <Route path="*" element={<p>Path not resolved</p>} />
                    <Route path="/profile" element={<ProfilePage username={username}/>} />
                    <Route path="/:username" element={<ProfilePage/>}>
                    </Route>
                </Routes>
                </>

                ):
                (
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/*" element={<LoginPage/>}/>
                </Routes>
                )}
            </div>
        </div>
    )
}

export default Main;