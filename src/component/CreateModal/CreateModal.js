import React,{useState} from "react";
import close from "../../assets/images/createModal/close.svg"
import InputModalBody from "./InputModalBody";
import PreviewModalBody from "./PreviewModalBody";
import create_logo from "../../assets/images/createModal/create_logo.svg"
import "./CreateModal.scss"

const CreateModal =({modalShow,onClose})=>{

    const [photoLink,setPhotoLink]=useState("");
    const [postContent,setPostContent]=useState("");
    const [step,setStep]=useState(0);

    if (!modalShow){
        return null
    }


    const changeStep=(step,setStep,photoLink,setPhotoLink)=>{
        switch (step) {
            case 0:
                return <InputModalBody photoLink={photoLink} setPhotoLink={setPhotoLink} setStep={setStep} step={step}/>
            case 1:
                return <PreviewModalBody photoLink={photoLink} setPhotoLink={setPhotoLink} setStep={setStep} step={step} postContent={postContent} setPostContent={setPostContent}/>
            default:
                break;
        }
    }

    return(
        <div className="create-modal" onClick={onClose} >
            <img src={close} onClick={onClose} className="modal-close-button" alt="close-button"/>
            <div className="modal-content" onClick={event=>event.stopPropagation()}>
                {changeStep(step,setStep,photoLink,setPhotoLink)}
            </div>
        </div>
    )
}

export default CreateModal;