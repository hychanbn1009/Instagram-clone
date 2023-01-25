import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { submit,editPost } from "../../thunk/postThunk";

const PreviewModalBody=({photoLink,setPhotoLink,step,setStep,postContent,setPostContent,path,postId})=>{

    const [errorMessageShake,setErrorMessageShake]=useState(false);
    const [errorMessage,setErrorMessage]=useState("");

    const { loading, error } = useSelector(
        (state) => state.post
    )

    const { token,user } = useSelector(
        (state) => state.auth
    )
    const username=user.username

    const dispatch = useDispatch();

    const handleSubmit = async() => {
        if (path==="create"){
            if(postContent){
                try{
                    dispatch(submit({photoLink,postContent,username}))
                    setStep(step+1)
                } catch(err){
                    setErrorMessage(err)
                }
            }else{
                setErrorMessage("Post content cannot be empty!")
            }
        }
        if (path==="edit"){
            if(postContent){
                try{
                    dispatch(editPost({username,postId,postContent}))
                    setStep(step+1)
                } catch(err){
                    setErrorMessage(err)
                }
            }else{
                setErrorMessage("Post content cannot be empty!")
            }
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
                value={postContent}
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