import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const username=useParams().username;
  const [user,setUser]=useState({})
  useEffect(()=>{
    const fetchData=async()=>{
      const res= await axios.get(`/users?username=${username}`)
      // console.log(res)
      setUser(res.data)
    }
    fetchData();
  },[username])
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture ||PF+`person/noCover.jpg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture ||PF+`person/noAvatar.png`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
