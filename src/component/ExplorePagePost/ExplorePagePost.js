import React,{useState} from "react";
import "./ExplorePagePost.scss"
import like from "../../assets/images/post/like.svg";
import comment from "../../assets/images/post/comment.svg";
import CreateModal from "../../component/CreateModal/CreateModal";

const ExplorePagePost =({post,index})=>{

    const [modalShow,setModalShow]=useState(false)

    const handleClick=(author,postId)=>{
        setModalShow(true)
    }

    return(
        <div className={`explore-page-post photo${index}`}>
            <CreateModal modalShow={modalShow} 
                path="explore" 
                onClose={()=>setModalShow(false)} 
                username={post.author.username} 
                profilePhotoLink={post.photoLink} 
                profilePostContent={post.postContent} 
                timestamp={post.timestamp} 
                postId={post._id}
                likedUser={post.likedUser}
            />
            <div className="photo-wrapper">
                <div className="photo-cover">
                    <img src={post.photoLink} className="explore-image"/>
                    <div className="photo-cover-text" onClick={()=>handleClick(post.author.username,post._id)}>
                        <span><img src={like}/>{post.likes}</span>
                        <span><img src={comment}/>{post.comments.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExplorePagePost;