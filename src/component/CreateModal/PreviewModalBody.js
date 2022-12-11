import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { submit } from "../../thunk/postThunk";

const PreviewModalBody=({photoLink,setPhotoLink,step,setStep,postContent,setPostContent})=>{

    const [errorMessageShake,setErrorMessageShake]=useState(false);
    const [errorMessage,setErrorMessage]=useState("");

    const { loading, error } = useSelector(
        (state) => state.post
    )
    const dispatch = useDispatch();

    const handleSubmit = async() => {
        if(postContent){
            try{
                dispatch(submit({photoLink,postContent}))
                setStep(step+1)
            } catch(err){
                setErrorMessage(err)
            }
        }else{
            setErrorMessage("Post content cannot be empty!")
        }
    };

    return(
        <>
            <h1 className="modal-header">
                Preview Your Post
            </h1>
            <div className="preview-modal-body">
                <img src={photoLink} alt="preview" className="preview-image"/>
                <textarea 
                placeholder="Write a caption..."
                autoComplete="off"
                autoCorrect="off"
                onChange={(event)=>setPostContent(event.target.value)}
                />
                {loading?<span class="loader"></span>:null}
                {errorMessage?
                <span className="error-message" 
                id={errorMessageShake?"shaking":null}
                onAnimationEnd={()=>setErrorMessageShake(false)}
                >
                {errorMessage}
                </span>:null}
                <div className="btn-group">
                    <button onClick={()=>setStep(step-1)}>Back</button>
                    <button onClick={()=>handleSubmit({photoLink,postContent})}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default PreviewModalBody;