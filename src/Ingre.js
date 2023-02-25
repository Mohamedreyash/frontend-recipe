import React from "react";
const Ingre=({post})=>{
    return(
        <>
                <div className="inner-box">
                    <div className="info">
                        <img src={post.PostImage} alt=""></img>
                        <h1>{post.title}</h1>
                        <h3>{post.author}</h3>
                        <h4>{post.ingredients}</h4>
                        <h4>{post.description}</h4>
                    </div>
                </div>
        </>
    )
}

export default Ingre;