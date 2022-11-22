import React from "react";
import "./ExplorePage.scss"
import post1 from "../../assets/images/post/post1.jpg";
import like from "../../assets/images/post/like.svg";
import comment from "../../assets/images/post/comment.svg";

const ExplorePage =()=>{
    return(
        <div className="explore-page">
            <main className="wrapper">
                <div className="photo1">
                    <div className="photo-cover">
                        <img src={post1} className="explore-image"/>
                        <div className="photo-cover-text">
                            <span><img src={like}/>123</span>
                            <span><img src={comment}/>12</span>
                        </div>
                    </div>
                </div>
                <div className="photo2">
                    <div className="photo-cover">
                        <img src={post1} className="explore-image"/>
                        <div className="photo-cover-text">
                            <span><img src={like}/>123</span>
                            <span><img src={comment}/>12</span>
                        </div>
                    </div>
                </div>
                <div className="photo3">
                    <div className="photo-cover">
                        <img src={post1} className="explore-image"/>
                        <div className="photo-cover-text">
                            <span><img src={like}/>123</span>
                            <span><img src={comment}/>12</span>
                        </div>
                    </div>
                </div>
                <div className="photo4">
                    <div className="photo-cover">
                        <img src={post1} className="explore-image"/>
                        <div className="photo-cover-text">
                            <span><img src={like}/>123</span>
                            <span><img src={comment}/>12</span>
                        </div>
                    </div>
                </div>
                <div className="photo5">
                    <div className="photo-cover">
                        <img src={post1} className="explore-image"/>
                        <div className="photo-cover-text">
                            <span><img src={like}/>123</span>
                            <span><img src={comment}/>12</span>
                        </div>
                    </div>
                </div>
                <div className="photo6">
                    <div className="photo-cover">
                        <img src={post1} className="explore-image"/>
                        <div className="photo-cover-text">
                            <span><img src={like}/>123</span>
                            <span><img src={comment}/>12</span>
                        </div>
                    </div>
                </div>
                <div className="photo7">
                    <div className="photo-cover">
                        <img src={post1} className="explore-image"/>
                        <div className="photo-cover-text">
                            <span><img src={like}/>123</span>
                            <span><img src={comment}/>12</span>
                        </div>
                    </div>
                </div>
                <div className="photo8">
                    <div className="photo-cover">
                        <img src={post1} className="explore-image"/>
                        <div className="photo-cover-text">
                            <span><img src={like}/>123</span>
                            <span><img src={comment}/>12</span>
                        </div>
                    </div>
                </div>
                <div className="photo9">
                    <div className="photo-cover">
                        <img src={post1} className="explore-image"/>
                        <div className="photo-cover-text">
                            <span><img src={like}/>123</span>
                            <span><img src={comment}/>12</span>
                        </div>
                    </div>
                </div>
                <div className="photo10">
                    <div className="photo-cover">
                        <img src={post1} className="explore-image"/>
                        <div className="photo-cover-text">
                            <span><img src={like}/>123</span>
                            <span><img src={comment}/>12</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ExplorePage;