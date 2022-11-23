import React from "react";
import arrow from "../../assets/images/messagesPage/arrow.svg";
import write from "../../assets/images/messagesPage/write.svg";
import send from "../../assets/images/messagesPage/send.svg";
import icon from "../../assets/images/icon.jpg"
import "./MessagesPage.scss"

const MessagesPage=()=>{
    return(
        <div className="messages-page">
            <div className="messages-page-box-container">
                <section className="contact-list-container">
                    <div className="personal-information-container">
                        <div className="username-container">
                            <span>Username</span><img src={arrow} className="arrow"/>
                        </div>
                        <img src={write} className="write"/>
                    </div>
                    <div className="friends-list-container">
                        <ul>
                            <li>
                                <img src={icon} className="user-icon"/>
                                <div className="friend-container">
                                    <p className="username">Username</p>
                                    <div className="friend-message"><span>Username</span><span>·</span><span>timestamp</span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <main className="chat-box-container">
                    <img src={send} className="send"/>
                    <h2>Your Messages</h2>
                    <small>Send private photos and messages to a friend or group.</small>
                    <button>Send Message</button>
                </main>
            </div>
        </div>
    )
}

export default MessagesPage;