import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removePost } from "../../thunk/postThunk";
import { useNavigate  } from "react-router-dom";
import PreviewModalBody from "../CreateModal/PreviewModalBody";
import SuccessModalBody from "../CreateModal/SuccessModalBody";

const PostMenu=({onClose,profilePhotoLink,profilePostContent})=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username=window.location.pathname.split("/")[1]
    const postId=window.location.pathname.split("/")[2]

    const [newPostContent,setNewPostContent]=useState(profilePostContent);
    const [step,setStep]=useState(0);

    const onDelete=()=>{
        dispatch(removePost({username,postId}))
        navigate(-1)
    }

    const onEdit=()=>{
                    switch (step) {
                case 0:
                    return (
                        <>
                            <li className="delete" onClick={()=>onDelete()}>Delete</li>
                            <li className="edit" onClick={()=>setStep(step+1)}>Edit</li>
                            <li className="cancel" onClick={onClose}>Cancel</li>
                        </>
                    )
                case 1:
                    return <PreviewModalBody 
                    photoLink={profilePhotoLink} 
                    setStep={setStep} step={step} 
                    postContent={newPostContent} 
                    setPostContent={setNewPostContent} 
                    path="edit"
                    username={username}
                    postId={postId}
                    />
                case 2:
                    return <SuccessModalBody path="edit"/>
                default:
                    break;
            }
    }

    return(
        <div className="post-menu-modal" onClick={onClose}>
            <ul className="post-menu-content" onClick={event=>event.stopPropagation()}>
                {onEdit()}
            </ul>
        </div>
    )
}

export default PostMenu;