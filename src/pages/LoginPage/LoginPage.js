import React from "react";
import "./LoginPage.scss";
import logo from "../../assets/images/sidebar/instagram_word.svg"

const LoginPage=()=>{
    return(
        <div className="login-page">
            <div className="login-container">
                <img src={logo} className="logo"/>
                <div className="input-field">
                    <input type="text" name="username" placeholder=" " required/>
                    <span>Phone number, username, or email</span>
                </div>
                <div className="input-field">
                    <input type="password" name="password" placeholder=" " required/>
                    <span>Password</span>
                </div>
                <button className="login-button">Log in</button>
                <div className="break-line">
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <div className="register-container">
                    <p>Don't have an account?&nbsp;</p>
                    <a>Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;