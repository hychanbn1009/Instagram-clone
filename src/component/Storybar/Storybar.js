import React from "react";
import "./storybar.scss"
import icon from "../../assets/images/icon.jpg"

const Storybar=()=>{
    return(
        <div className="storybar">
            <div className="story-container">
                <div className="image-wrap">
                    <img src={icon}/>
                </div>
                <span>A</span>
            </div>
            <div className="story-container">
                <div className="image-wrap">
                    <img src={icon}/>
                </div>
                <span>B</span>
            </div>            
            <div className="story-container">
                <div className="image-wrap">
                    <img src={icon}/>
                </div>
                <span>C</span>
            </div>            
            <div className="story-container">
                <div className="image-wrap">
                    <img src={icon}/>
                </div>
                <span>D</span>
            </div>
            <div className="story-container">
                <div className="image-wrap">
                    <img src={icon}/>
                </div>
                <span>E</span>
            </div>
            <div className="story-container">
                <div className="image-wrap">
                    <img src={icon}/>
                </div>
                <span>F</span>
            </div>
        </div>
    )
}

export default Storybar;