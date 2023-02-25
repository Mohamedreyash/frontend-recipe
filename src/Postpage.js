import React from "react";
import {useNavigate} from "react-router-dom"
import "./postpage.css"

function Postpage(){
  const Navigate=useNavigate();
  const handle=async(e)=>{
    alert("Loading");
    e.preventDefault()
    let view=e.target
    console.log(view);
    let dataform=new FormData(view);
    console.log(dataform);
    await fetch('https://recipe-back.onrender.com/createPost',{
        method:'Post',
        body:dataform
    }).then(res=>res.json()).then((d)=>{
        alert("Posted")
        console.log(d);
    }).catch((e)=>{
        console.log(e.message);
    }).finally(()=>Navigate('/Postview'))
  }

    return(
        <>
        <div className="Container-post">
            <form onSubmit={(event)=>handle(event)}>
                <div className="white">
                    <h1>Create a recipe</h1>
                    <p>Share a recipe with the club by completing the form below</p>
                   <label htmlFor="title">Recipe title</label>
                    <input type="text" name="title" id="title" placeholder="title" required/>
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" placeholder="author" required/>
                   <label htmlFor="author">Please Upload Your Image</label>
                   <input type="file" name="PostImage" id="img" required/>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" name="ingredients" id="ingredients" placeholder="incredients" required />
                    <label htmlFor="description">Recipe Description</label>
                    <input type="text" name="description" id="description" placeholder="Description" required />
                </div>
                <button>Post</button>
            </form>
        </div>
        </>
    )
}

export default Postpage