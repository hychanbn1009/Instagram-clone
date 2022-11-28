import React,{useState} from "react";
import "./RegisterPage.scss";
import logo from "../../assets/images/sidebar/instagram_word.svg"
import { useSelector, useDispatch } from 'react-redux';
import { register } from "../../thunk/authThunk";
import { useNavigate } from "react-router-dom";

const RegisterPage=()=>{

    const { loading, error } = useSelector(
        (state) => state.auth
    )

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email,setEmail]=useState("");
    const [fullname,setFullname]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(register({email,password}));
    };

    return(
        <div className="register-page">
            <form className="register-container" onSubmit={handleSubmit}>
                <img src={logo} className="logo"/>
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
                    autoCorrect={false}
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
                    autoCorrect={false}
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
                    autoCorrect={false}
                    placeholder=" " 
                    required/>
                    <span>Password</span>
                </div>
                <button 
                className="login-button"
                type="submit"
                >Sign up</button>
                {error?<p>error</p>:null}
                <div className="login-container">
                    <p>Have an account?&nbsp;</p>
                    <a onClick={()=>navigate("/login")}>Log in</a>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage;