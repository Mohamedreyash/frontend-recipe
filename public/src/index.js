import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { Provider } from './components/axios/axioscontext';
import Header from './Header';
import Postview from './Postview';
import Postpage from './Postpage';
import Ingre from './Ingre';
const root = ReactDOM.createRoot(document.getElementById('root'));
const token = localStorage.getItem("token");
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recipe" element={token ? <Header /> : <Navigate replace to={"/"} />} />
            <Route path='/Postview' element={<Postview/>}/>
            <Route path='/Postpage' element={<Postpage/>}/>
          </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
