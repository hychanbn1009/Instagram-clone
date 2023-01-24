import React,{useState} from "react";
import "./LoginPage.scss";
import logo from "../../assets/images/sidebar/instagram_word.svg";
import {login} from '../../thunk/authThunk'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate  } from "react-router-dom";
import { clearState } from "../../features/authSlice";

const LoginPage=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [errorMessageShake,setErrorMessageShake]=useState(false);

    const { loading, errorMessage,token,success } = useSelector(
        (state) => state.auth
    )

    const handleSubmit = (event) => {
        dispatch(clearState())
        event.preventDefault();
        setErrorMessageShake(true)
        try{
            const response = dispatch(login({email,password}))
            navigate("/")
        } catch(err){
            console.log(err)
        }
    };

    const navigateSignUp=()=>{
        navigate("/register")
        dispatch(clearState())
    }

    const autoFill=()=>{
        setEmail("tester@gmail.com")
        setPassword("123")
    }
    
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
                :<>
                <button 
                className="login-button"
                type="submit"
                >Log in</button>
                <button className="login-button" type="submit" onClick={()=>autoFill()}>
                    Auto fill for testing
                </button>
                </>
                }
                <div className="break-line">
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                {errorMessage?<p 
                id={errorMessageShake?"shaking":null}
                onAnimationEnd={()=>setErrorMessageShake(false)}
                className="error-message"
                >{errorMessage}</p>:null}
                <div className="register-container">
                    <p>Don't have an account?&nbsp;</p>
                    <a onClick={()=>navigateSignUp()}>Sign up</a>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;