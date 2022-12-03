import React from "react";
import "./CreateModal.scss";

const SuccessModalBody=()=>{
    return(
        <>
            <h1 className="modal-header">
                Successful
            </h1>
            <div className="modal-body">
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                <span> Your post has been posted successfully!</span>
            </div>
        </>
    )
}

export default SuccessModalBody;