import React,{useState} from "react";
import close from "../../assets/images/createModal/close.svg"
import InputModalBody from "./InputModalBody";
import PreviewModalBody from "./PreviewModalBody";
import SuccessModalBody from "./SuccessModalBody";
import PostModal from "../PostModal/PostModal";
import {useNavigate} from "react-router-dom";
import "./CreateModal.scss"

const CreateModal =({modalShow,onClose,path,username,profilePhotoLink,profilePostContent,timestamp,postId,likedUser})=>{

    const navigate = useNavigate();

    const [photoLink,setPhotoLink]=useState("");
    const [postContent,setPostContent]=useState("");
    const [step,setStep]=useState(0);
    const [imageLoading,setImageLoading]=useState(false);

    if (!modalShow){
        return null
    }

    const changeStep=(step,setStep,photoLink,setPhotoLink)=>{
        if (path === "create"){
            switch (step) {
                case 0:
                    return <InputModalBody photoLink={photoLink} setPhotoLink={setPhotoLink} setStep={setStep} step={step} imageLoading={imageLoading} setImageLoading={setImageLoading}/>
                case 1:
                    return <PreviewModalBody 
                    photoLink={photoLink} 
                    setPhotoLink={setPhotoLink} 
                    setStep={setStep} step={step} 
                    postContent={postContent} 
                    setPostContent={setPostContent}
                    path={path}/>
                case 2:
                    return <SuccessModalBody path={path}/>
                default:
                    break;
            }
        }
        if (path === "profile" || path === "explore"){
            {console.log(username)}
            return <PostModal profilePhotoLink={profilePhotoLink} username={username} profilePostContent={profilePostContent} timestamp={timestamp} postId={postId} likedUser={likedUser}/>
        }
    }

    const closeModal=()=>{
        if (path==="create"){
            onClose()
            setStep(0)
            setPhotoLink("")
            setPostContent("")
        }
        if (path === "profile"){
            navigate(`/${username}`)
            onClose()
        }
        if (path === "explore"){
            navigate(`/explore`)
            onClose()
        }
    }

    return(
        <div className="create-modal" onClick={closeModal} >
            <img src={close} onClick={closeModal} className="modal-close-button" alt="close-button"/>
            <div className="modal-content" onClick={event=>event.stopPropagation()}>
                {changeStep(step,setStep,photoLink,setPhotoLink)}
            </div>
        </div>
    )
}

export default CreateModal;