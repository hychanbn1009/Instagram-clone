import React,{useState} from "react";
import close from "../../assets/images/createModal/close.svg"
import InputModalBody from "./InputModalBody";
import PreviewModalBody from "./PreviewModalBody";
import SuccessModalBody from "./SuccessModalBody";
import PostModal from "../PostModal/PostModal";
import "./CreateModal.scss"

const CreateModal =({modalShow,onClose})=>{

    const [photoLink,setPhotoLink]=useState("");
    const [postContent,setPostContent]=useState("");
    const [step,setStep]=useState(0);
    const [imageLoading,setImageLoading]=useState(false);

    if (!modalShow){
        return null
    }

    const changeStep=(step,setStep,photoLink,setPhotoLink)=>{
        switch (step) {
            case 0:
                return <InputModalBody photoLink={photoLink} setPhotoLink={setPhotoLink} setStep={setStep} step={step} imageLoading={imageLoading} setImageLoading={setImageLoading}/>
            case 1:
                return <PreviewModalBody photoLink={photoLink} setPhotoLink={setPhotoLink} setStep={setStep} step={step} postContent={postContent} setPostContent={setPostContent}/>
            case 2:
                return <SuccessModalBody/>
            default:
                break;
        }
    }

    const closeModal=()=>{
        onClose()
        setStep(0)
        setPhotoLink("")
        setPostContent("")
    }

    return(
        <div className="create-modal" onClick={closeModal} >
            <img src={close} onClick={closeModal} className="modal-close-button" alt="close-button"/>
            <div className="modal-content" onClick={event=>event.stopPropagation()}>
                {changeStep(step,setStep,photoLink,setPhotoLink)}
                {/* <PostModal/> */}
            </div>
        </div>
    )
}

export default CreateModal;