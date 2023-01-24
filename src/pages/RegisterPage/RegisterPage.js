import React,{useEffect, useState} from "react";
import "./RegisterPage.scss";
import logo from "../../assets/images/sidebar/instagram_word.svg"
import { useSelector, useDispatch } from 'react-redux';
import { register } from "../../thunk/authThunk";
import { useNavigate } from "react-router-dom";
import { clearState } from "../../features/authSlice";

const RegisterPage=()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, errorMessage,success} = useSelector(
        (state) => state.auth
    )

    const [email,setEmail]=useState("");
    const [fullname,setFullname]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [localErrorMessage,setLocalErrorMessage]=useState(errorMessage);
    const [errorMessageShake,setErrorMessageShake]=useState(false);

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    const handleSubmit = async(event) => {
        dispatch(clearState())
        event.preventDefault();
        if(!validateEmail(email)){
            setLocalErrorMessage("Email address is not correct.");
            setErrorMessageShake(true);
        }else{
            setErrorMessageShake(true);
            try{
                const response = dispatch(register({email,fullname,username,password}))
                navigate("/")
            } catch(err){
                navigate("/register")
            }
        }
    };

    useEffect(()=>{
        console.log(success)
        if(success){
            navigate("/")
        }
    },[navigate,success])

    const navigateSignIn=()=>{
        navigate("/login")
        dispatch(clearState())
    }

    return(
        <div className="register-page">
            <form className="register-container" onSubmit={handleSubmit}>
                <img src={logo} className="logo" alt="app-logo"/>
                <h2>Sign up to see photos and videos from your friends.</h2>
                <div className="break-line">
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <div className="input-field">
                    <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={email}
                    onChange={(event)=>{setEmail(event.target.value)}}
                    placeholder=" " 
                    required/>
                    <span>Email</span>
                </div>
                <div className="input-field">
                    <input 
                    type="text" 
                    name="fullname"
                    id="fullname"
                    value={fullname}
                    onChange={(event)=>{setFullname(event.target.value)}}
                    autoCapitalize='none'
                    placeholder=" " 
                    required/>
                    <span>Full Name</span>
                </div>
                <div className="input-field">
                    <input 
                    type="text" 
                    name="username" 
                    id="username"
                    value={username}
                    onChange={(event)=>{setUsername(event.target.value)}}
                    autoCapitalize='none'
                    placeholder=" " 
                    required/>
                    <span>Username</span>
                </div>
                <div className="input-field">
                    <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={(event)=>{setPassword(event.target.value)}}
                    autoCapitalize='none'
                    placeholder=" " 
                    required/>
                    <span>Password</span>
                </div>
                {loading?
                <span class="loader"></span>:
                <button 
                className="login-button"
                type="submit"
                >Sign up</button>}
                {localErrorMessage?<p
                id={errorMessageShake?"shaking":null}
                onAnimationEnd={()=>setErrorMessageShake(false)}
                className="error-message"
                >{localErrorMessage}</p>:null}
                <div className="login-container">
                    <p>Have an account?&nbsp;</p>
                    <a onClick={()=>navigate("/login")}>Log in</a>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage;