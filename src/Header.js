import React from "react"
import "./Header.css";
import logo from "./images/logo.png"
import food from "./images/new.png"
import Search from "./images/search.png"
import { Link } from 'react-router-dom'
import { Context } from "./components/axios/axioscontext"
import { useContext } from 'react';
const Header=()=>{
    const { title, myFunction } = useContext(Context);
   return(
    <>
    <nav className="header">
        <section className="logo">
            <img src={logo} alt="log"/>
            <h1>Recipe App</h1>
        </section>
        <div className='search'>
                        <img src={Search} alt="" width="20px" />
                        <input type="search"
                            placeholder='Search by title....'
                            id='myInput'
                            onKeyUp={() => myFunction()}

                        />
                    </div>
        <section className="camera-icon">
           <Link to="/Postpage"><img src={food} alt="camera"/></Link>
        </section>
    </nav>
     </>
   
)
}
export default Header;
