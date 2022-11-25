import React from "react";
import create_logo from "../../assets/images/createModal/create_logo.svg"
import close from "../../assets/images/createModal/close.svg"
import "./CreateModal.scss"

const CreateModal =({modalShow,onClose})=>{
    if (!modalShow){
        return null
    }
    return(
        <div className="create-modal" onClick={onClose} >
            <img src={close} onClick={onClose} className="modal-close-button"/>
            <div className="modal-content" onClick={event=>event.stopPropagation()}>
                <h1 className="modal-header">
                    Create new post
                </h1>
                <div className="modal-body">
                    <img src={create_logo}/>
                    <p>Drag photos and videos here</p>
                    <button>Select from computer</button>
                </div>
            </div>
        </div>
    )
}

export default CreateModal;