import React from "react";
import create_logo from "../../assets/images/createModal/create_logo.svg"

const PreviewModalBody=({photoLink,setPhotoLink,step,setStep,postContent,setPostContent})=>{

    const imageError=(image)=>{
        image.onerror="";
        image.src=""
    }

    return(
        <>
            <h1 className="modal-header">
                Preview Your Post
            </h1>
            <div className="preview-modal-body">
                <img src={photoLink} onError="No Image" alt="preview-image" className="preview-image"/>
                <textarea 
                placeholder="Write a caption..."
                autoComplete="off"
                autoCorrect="off"
                onChange={(event)=>setPostContent(event.target.value)}
                />
                {console.log(postContent)}
                <div className="btn-group">
                    <button onClick={()=>setStep(step-1)}>Back</button>
                    <button onClick={()=>setStep(step+1)}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default PreviewModalBody;