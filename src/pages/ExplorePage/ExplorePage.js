import React,{useEffect} from "react";
import "./ExplorePage.scss"
import { useSelector, useDispatch } from 'react-redux';
import {get} from '../../thunk/postThunk';
import ExplorePagePost from "../../component/ExplorePagePost/ExplorePagePost";

const ExplorePage =()=>{

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
        <div className="explore-page">
            {console.log(posts)}
            <main className="wrapper">
                {posts.map((post,index)=>{
                    return <ExplorePagePost post={post} index={index}/>
                })}
            </main>
        </div>
    )
}

export default ExplorePage;