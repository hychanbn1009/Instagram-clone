import React,{ useEffect, useState,useRef } from "react";
import icon from "../../assets/images/icon.jpg";
import sendIcon from "../../assets/images/chatroom/send.svg";
import { useSelector } from 'react-redux';
import { clearMessageState } from "../../features/messageSlice";
import "./Chatroom.scss";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000/")

const Chatroom =({targetFriend,room})=>{

    const [sendMessage,setSendMessage]=useState("")
    const [localmessageHistory,setLocalMessageHistory]=useState([]);
    const [textAreaHeight,setTextAreaHeight]=useState(1)
    const textAreaRef = useRef(null);

    const {user} = useSelector(
        (state) => state.auth
    )

    useEffect(()=>{
        socket.emit("join-room",room)
        clearMessageState()
        socket.on("get-chat-history",history=>{
            console.log(history)
            let tempArray=[]
            history.forEach(message=>{
                if (message.sender._id===user._id){       
                    tempArray.push(
                    <div className="message-container" id="friend">
                            <span className="message" id="friend">{message.messageContent}</span>
                    </div>
                    )
                }else{
                    tempArray.push(
                        <div className="message-container" id="user">
                            <span className="message" id="user">{message.messageContent}</span>
                        </div>
                    )
                }
            })
            setLocalMessageHistory(tempArray)
        })
        const addNewMessage=(newMessage)=>{
            setLocalMessageHistory(prevArray=>[
                <div className="message-container" id="friend">
                    <span className="message" id="friend">{newMessage}</span>
                </div> ,...prevArray
            ])
        }
        socket.on("receive-message",addNewMessage)
        return () => socket.off("receive-message",addNewMessage);
    },[room,user._id])

    const submitMessage=()=>{
        socket.emit("send-message",sendMessage,room,user._id)
        setLocalMessageHistory(prevArray=>[
            <div className="message-container" id="user">
                <span className="message" id="user">{sendMessage}</span>
            </div>,...prevArray
        ])
        setSendMessage("")
    }

    const handleTextareaChange=(event)=>{ 
        setSendMessage(event.target.value)
        let currentHeight= (textAreaRef.current.scrollHeight-33)/17+1
        if (currentHeight<6){
            setTextAreaHeight(currentHeight)
        }else{
            setTextAreaHeight(6)
        }
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
                {localmessageHistory}
            </body>
            <footer className="chatroom-footer-container">
                <div className="message-input-container" >
                    <textarea 
                    className="message-input-field" 
                    placeholder="Message"
                    rows={textAreaHeight}
                    value={sendMessage}
                    ref={textAreaRef}
                    onChange={(event)=>handleTextareaChange(event)}/>
                    <img src={sendIcon} className="send-icon" alt="send-button" onClick={()=>submitMessage()}/>
                </div>
            </footer>
        </div>
    )
}

export default Chatroom;