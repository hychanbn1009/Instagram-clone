import React,{useEffect} from "react";
import Storybar from "../Storybar/Storybar";
import MainPagePost from "../MainPagePost/MainPagePost";
import SuggestList from "../SuggestList/SuggestList";
import { useSelector, useDispatch } from 'react-redux';
import {get} from '../../thunk/postThunk';
import "./MainPagePostList.scss";

const MainPagePostList=()=>{

    const {posts} = useSelector(
        (state) => state.post
    )

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchData =async()=>{
            try{
                dispatch(get())
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[dispatch])

    return(
        <>
            <div className="post-container">
                <Storybar/>
                {posts?
                posts.map((post)=>{
                    return <MainPagePost key={post._id} username={post.author.username} photoLink={post.photoLink} postContent={post.postContent} timestamp={post.timestamp}/>
                }) 
                :<div className="loader"></div>}
            </div>
            <SuggestList/>
        </>
    )
}

export default MainPagePostList;