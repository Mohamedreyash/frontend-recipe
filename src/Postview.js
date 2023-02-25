import { useEffect, useState } from "react";
import Card from "./Card";
import "./card.css"
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const Postview=()=>{
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch("https://recipe-back.onrender.com/getPost").then((res)=>res.json()).then((data)=>{
            data.reverse();
             setPosts(data)
        }).catch((err)=>{
           if(err){
               console.log(err);
           }
        })
    },[])
    const navigate = useNavigate()
    return(
        <>
        <Header/>
        <h1>All Recipes</h1>
        <div className="post-container">
             {posts.map((post,i)=>{
                 return(
                     <Card post={post} key={i}/>
                 )
             })}
        </div>
        <div className="logout-container">
                    <p onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/")
                        document.location.reload();
                    }}>Log Out</p>
         </div>
        </>
    )
}
export default Postview;