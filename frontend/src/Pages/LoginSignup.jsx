import React, { useState } from "react";
import style from "./CSS/LoginSignup.css";

export const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })


  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  const login = async () =>{
    console.log("Login Function Executed",formData);
    let responceData;
    await fetch('https://breezer-frontend.onrender.com/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responceData=data)
    if(responceData.success){
      localStorage.setItem('auth-token',responceData.token);
      window.location.replace("/");
    }
    else{
      alert(responceData.errors)
    }
  }

  const signup = async () =>{
    console.log("Signup Function Executed",formData);
    let responceData;
    await fetch('https://breezer-frontend.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responceData=data)
    if(responceData.success){
      localStorage.setItem('auth-token',responceData.token);
      window.location.replace("/");
    }
    else{
      alert(responceData.errors)
    }
  }

  return (
    <div data-testid="testlogin" className={style.loginsignup}>
      <div className={style.loginsignupContainer}>
        <h1>{state}</h1>
        <div className={style.loginsignupFields}>
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"
        ?<p className={style.loginsignupLogin}>
          Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span>
        </p>
        : <p className={style.loginsignupLogin}>
        Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span>
      </p>}
        <div className={style.loginsignupAgree}>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy</p>
        </div>
      </div>
    </div>
  );
};
