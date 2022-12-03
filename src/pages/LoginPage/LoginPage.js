import React,{useState} from "react";
import "./LoginPage.scss";
import logo from "../../assets/images/sidebar/instagram_word.svg";
import {login} from '../../thunk/authThunk'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate  } from "react-router-dom";

const LoginPage=()=>{
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const { loading, error,token,success } = useSelector(
        (state) => state.auth
    )

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        try{
            dispatch(login({email,password}))
            navigate("/")
        } catch(err){
            console.log(err)
        }
    };
    
    return(
        <div className="login-page">
            <form className="login-container" onSubmit={handleSubmit}>
                <img src={logo} className="logo" alt="app-icon"/>
                <div className="input-field">
                    <input 
                    type="text" 
                    id="email"
                    name="email" 
                    value={email}
                    placeholder=" " 
                    onChange={(event)=>{setEmail(event.target.value)}}
                    autoCapitalize='none'
                    required/>
                    <span>Phone number, username, or email</span>
                </div>
                <div className="input-field">
                    <input 
                    type="password" 
                    id="password"
                    name="password" 
                    value={password}
                    placeholder=" "
                    onChange={(event)=>{setPassword(event.target.value)}}
                    autoCapitalize='none'
                    required
                    />
                    <span>Password</span>
                </div>
                {loading?
                <span class="loader"></span>
                :<button 
                className="login-button"
                type="submit"
                >Log in</button>}
                <div className="break-line">
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                {error?<p className="error-message">{error}</p>:null}
                <div className="register-container">
                    <p>Don't have an account?&nbsp;</p>
                    <a onClick={()=>navigate("/register")}>Sign up</a>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;