import React from "react"
import { Link } from 'react-router-dom'
const Card=({post})=>{
    return(
        <>
      
      <section className="card">
                <section className="card-header">
                    <div id="head">
                        <div id="card-header__title"><p>{post.title}</p></div>
                    </div>
                </section>
                <section className="card-image">
                <Link to="/Ingre"> <img src={post.PostImage} alt="place"/></Link>
                </section>
        </section>
        </>
    )
}
export default Card;