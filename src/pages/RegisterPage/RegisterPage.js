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
    const [errorMessageShake,setErrorMessageShake]=useState(false);

    const handleSubmit = async(event) => {
        dispatch(clearState())
        event.preventDefault();
        setErrorMessageShake(true);
        try{
            const response = dispatch(register({email,fullname,username,password}))
        } catch(err){
            navigate("/register")
        }
    };

    useEffect(()=>{
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
                {errorMessage?<p
                id={errorMessageShake?"shaking":null}
                onAnimationEnd={()=>setErrorMessageShake(false)}
                className="error-message"
                >{errorMessage}</p>:null}
                <div className="login-container">
                    <p>Have an account?&nbsp;</p>
                    <a onClick={()=>navigate("/login")}>Log in</a>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage;