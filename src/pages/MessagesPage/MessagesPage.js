import React,{useState} from "react";
import arrow from "../../assets/images/messagesPage/arrow.svg";
import write from "../../assets/images/messagesPage/write.svg";
import send from "../../assets/images/messagesPage/send.svg";
import icon from "../../assets/images/icon.jpg";
import Chatroom from "../../component/Chatroom/Chatroom";
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import "./MessagesPage.scss"

const MessagesPage=()=>{

    const {user} = useSelector(
        (state) => state.auth
    )
    const navigate = useNavigate();
    const location = useLocation();

    const [targetFriend,setTargetFriend]=useState(null)
    const [room,setRoom]=useState(null)

    const handleClick=(friend)=>{
        let chatroomUrl=[user._id,friend._id]
        chatroomUrl=chatroomUrl.sort().join("")
        if(location.pathname.split("/")[3]!==chatroomUrl){
            setTargetFriend(friend)
            setRoom(chatroomUrl)
            navigate(chatroomUrl)
        }
    }

    return(
        <div className="messages-page">
            {console.log(user)}
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
                            {user.following.map(friend=>
                                (<li className="friend-container" onClick={()=>handleClick(friend)}>
                                    <img src={icon} className="user-icon"/>
                                    <div className="friend-detail-container">
                                        <p className="username">{friend.username}</p>
                                        {/* <div className="friend-message">
                                            <span>{friend.username}</span><span>·</span><span>timestamp</span>
                                        </div> */}
                                    </div>
                                </li>)
                            )}
                            {/* <li className="friend-container">
                                <img src={icon} className="user-icon"/>
                                <div className="friend-detail-container">
                                    <p className="username">Username</p>
                                    <div className="friend-message"><span>Username</span><span>·</span><span>timestamp</span></div>
                                </div>
                            </li>
                            <li className="friend-container">
                                <img src={icon} className="user-icon"/>
                                <div className="friend-detail-container">
                                    <p className="username">Username</p>
                                    <div className="friend-message"><span>Username</span><span>·</span><span>timestamp</span></div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </section>
                <main className="chat-box-container">
                    {targetFriend?
                    <Chatroom targetFriend={targetFriend} room={room}/>
                    :
                    <div className="empty-box-container">
                        <img src={send} className="send"/>
                            <h2>Your Messages</h2>
                            <small>Send private photos and messages to a friend or group.</small>
                        <button>Send Message</button>   
                    </div>}  
                </main>
            </div>
        </div>
    )
}

export default MessagesPage;