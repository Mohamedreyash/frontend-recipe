import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios"
export const Context = createContext()
export const  Provider = (props) => {
  const [email, setEmail] = useState("");
  const nav = useNavigate();
  const userSignIn = (loginData) => {
    axios
      .post("https://recipe-back.onrender.com/login", loginData)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("email", loginData.email);
        nav("/recipe");
        window.alert("Login Successful");
        document.location.reload();
        setEmail(loginData.email);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        window.alert(err.response.data.message);
        console.log(err);
      });
  };

  const userSignUp = (userData) => {
    console.log(userData);
    try {
      axios
        .post("https://recipe-back.onrender.com/register", userData)
        .then((res) => {
          console.log(res);
          nav("/");
        })
        .catch((err) => {
          window.alert(err.response.data.message);
        });
    } catch (error) {
      window.alert(error.message);
    }
  };
  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("head");
    li = ul.getElementsById("card-header__title");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
  return (
    <Context.Provider value={{  userSignIn,
      email,userSignUp, myFunction}}>
      {props.children}
    </Context.Provider>

  )

}