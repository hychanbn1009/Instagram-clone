import React from "react";
import "./RegisterPage.scss";
import logo from "../../assets/images/sidebar/instagram_word.svg"

const RegisterPage=()=>{
    return(
        <div className="register-page">
            <div className="register-container">
                <img src={logo} className="logo"/>
                <h2>Sign up to see photos and videos from your friends.</h2>
                <div className="break-line">
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <div className="input-field">
                    <input type="text" name="phone&email" placeholder=" " required/>
                    <span>Moblie Number or Email</span>
                </div>
                <div className="input-field">
                    <input type="text" name="fullname" placeholder=" " required/>
                    <span>Full Name</span>
                </div>
                <div className="input-field">
                    <input type="text" name="username" placeholder=" " required/>
                    <span>Username</span>
                </div>
                <div className="input-field">
                    <input type="password" name="password" placeholder=" " required/>
                    <span>Password</span>
                </div>
                <button className="login-button">Sign up</button>
                <div className="login-container">
                    <p>Have an account?&nbsp;</p>
                    <a>Log in</a>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;