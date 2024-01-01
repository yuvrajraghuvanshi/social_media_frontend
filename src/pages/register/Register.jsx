import { useRef,React } from "react";
import "./register.css";
import axios from "axios"
import {useNavigate } from "react-router-dom";
export default function Register() {
  const username=useRef()
  const email=useRef()
  const password=useRef()
  const passwordAgain=useRef()
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(passwordAgain.current.value!== password.current.value){
      passwordAgain.current.setCustomValidity("Password Don't Match")
    }
    else{
      const user={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value
      }
      try{
      await axios.post("/signup",user)
      navigate('/login');

      }
      catch(err){
console.log(err)
      }
    }
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SociaPeo</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SociaPeo.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input placeholder="Username" minLength="6" required ref={username} className="loginInput" />
            <input placeholder="Email" type="email" required ref={email} className="loginInput" />
            <input placeholder="Password" minLength="6" type="password" required ref={password} className="loginInput" />
            <input placeholder="Password Again" minLength="6" type="password" required ref={passwordAgain} className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button type="submit" className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
