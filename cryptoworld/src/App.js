import React from 'react';
import './App.css';
import { Header } from './features/Components';
import {Routes,Route, Navigate} from "react-router-dom"
import { Home, Login, Post, Profile,NotFound } from './features/Pages';
import { useState } from 'react';

function App() {

  const [login,setLogin] = useState(true)

  function PrivateRoute({path,login,...props}){
    return login? <Route path={path} {...props}/>:<Navigate path={{from:path}} replace to="/login"/>
  }
  return (
    <div className="App">
      <Header/>
      <button onClick={()=>setLogin(login=>!login)}>{login?"Logout":"login"}</button>
      <Routes>
        <PrivateRoute exact path="/" login={login} element={<Home/>}/>
        <PrivateRoute path="/post/:id" login={login} element={<Post/>}/>
        <Route path="/login" element={<Login/>}/>
        <PrivateRoute path="/profile" login={login} element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
