import { useContext, useRef } from "react";
import {loginCall} from '../../apicalls'
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core"
export default function Login() {
  const username=useRef()
  const password=useRef()
  const {user,isFetching,error,dispatch}=useContext(AuthContext);
  const handleSubmit=(e)=>{
    e.preventDefault()
    loginCall({username:username.current.value,password:password.current.value},dispatch)
console.log(user)
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
            <input placeholder="Email" required className="loginInput" ref={username} />
            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
            <button type="submit" disabled={isFetching} className="loginButton">{isFetching?<CircularProgress color="white"size="20px"/>:"Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
