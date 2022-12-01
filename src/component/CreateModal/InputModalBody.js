import React from "react";
import create_logo from "../../assets/images/createModal/create_logo.svg"
import "./CreateModal.scss"

const InputModalBody=({photoLink,setPhotoLink,step,setStep})=>{
    return(
        <>
            <h1 className="modal-header">
                Create new post
            </h1>
            <div className="modal-body">
                <img src={create_logo} alt="create-logo"/>
                <p>Submit photo link here</p>
                <div className="input-field">
                    <input 
                    type="text" 
                    id="photoLink"
                    name="photoLink" 
                    value={photoLink}
                    placeholder=" "
                    onChange={(event)=>{setPhotoLink(event.target.value)}}
                    />
                    <span>Photo link</span>
                </div>
                <button onClick={()=>setStep(step+1)} disabled={!photoLink}>Submit</button>
            </div>
        </>
    )
}

export default InputModalBody;