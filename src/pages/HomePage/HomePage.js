import React,{useEffect} from "react";
import Storybar from "../../component/Storybar/Storybar";
import MainPagePost from "../../component/MainPagePost/MainPagePost";
import SuggestList from "../../component/SuggestList/SuggestList";
import { useSelector, useDispatch } from 'react-redux';
import {get} from '../../thunk/postThunk';
import "./HomePage.scss";

const HomePage=()=>{

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
                    {console.log(post.likedUser)}
                    return <MainPagePost postId={post._id} author={post.author.username} photoLink={post.photoLink} postContent={post.postContent} timestamp={post.timestamp} likedUser={post.likedUser}/>
                }) 
                :<div className="loader"></div>}
            </div>
            <SuggestList/>
        </>
    )
}

export default HomePage;