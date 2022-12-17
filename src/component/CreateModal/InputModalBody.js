import React,{useState} from "react";
import create_logo from "../../assets/images/createModal/create_logo.svg"
import "./CreateModal.scss"

const InputModalBody=({photoLink,setPhotoLink,step,setStep,imageLoading,setImageLoading})=>{

    const [errorMessage,setErrorMessage]=useState("");
    const [errorMessageShake,setErrorMessageShake]=useState(false);

    const checkImageUrl = (url) =>{
        return new Promise((resolve,reject)=>{
            const img = new Image();
            img.src = url;
            if (img.complete) {
                resolve (true);
            } else {
                img.onload = () => {
                    resolve (true);
                };
                img.onerror = () => {
                    reject (false);
                };
            }
        })
    }

    const submitImage=async()=>{
        setImageLoading(true)
        try{
            await checkImageUrl(photoLink)
            setStep(step+1)
            setErrorMessage("")
            setImageLoading(false)
        }catch(err){
            setErrorMessage("Your image link may not correct. Please check again.")
            setErrorMessageShake(true)
            setImageLoading(false)
        } 
    }

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
                {imageLoading?<span class="loader"></span>:null}
                {errorMessage?
                <span className="error-message" 
                id={errorMessageShake?"shaking":null}
                onAnimationEnd={()=>setErrorMessageShake(false)}
                >
                    {errorMessage}
                </span>:null}
                <button onClick={()=>submitImage()} disabled={!photoLink}>Next</button>
            </div>
        </>
    )
}

export default InputModalBody;