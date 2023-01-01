import React,{ useEffect, useState } from "react";
import icon from "../../assets/images/icon.jpg";
import sendIcon from "../../assets/images/chatroom/send.svg";
import "./Chatroom.scss";
import { io } from "socket.io-client";

const Chatroom =({targetFriend,room})=>{

    const [sendMessage,setSendMessage]=useState("")
    const [messageHistory,setMessageHistory]=useState([]);

    const socket = io("http://localhost:4000/")
    socket.on("connect",()=>{
        console.log(`You connected with id ${socket.id}`)
        socket.emit("join-room",room)
    })

    useEffect(()=>{
        socket.on("receive-message",receiveMessage=>{
            try{
                setMessageHistory(prevArray=>[
                <div className="message-container" id="friend">
                    <span className="message" id="friend">{receiveMessage}</span>
                </div> ,...prevArray
            ])}catch (err){
                console.log(err)
            }
        })
        return () => socket.off("receive-message");
    },[socket])

    const submitMessage=()=>{
        socket.emit("send-message",sendMessage,room)
        setMessageHistory(prevArray=>[
            <div className="message-container" id="user">
                <span className="message" id="user">{sendMessage}</span>
            </div>,...prevArray
        ])
    }

    return(

        <div className="chatroom-container">
            <header className="chatroom-header-container">
                <div className="user-information">
                    <img src={icon} className="user-icon" alt="icon"></img>
                    <span className="user-username">{targetFriend.username}</span>
                </div>
            </header>
            <body className="chatroom-body-container">
                {messageHistory}
            </body>
            <footer className="chatroom-footer-container">
                <div className="message-input-container" >
                    <textarea 
                    className="message-input-field" 
                    placeholder="Message"
                    rows="6"
                    onChange={(event)=>setSendMessage(event.target.value)}/>
                    <img src={sendIcon} className="send-icon" alt="send-button" onClick={()=>submitMessage()}/>
                </div>
            </footer>
        </div>
    )
}

export default Chatroom;