import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import {AuthContext} from '../../context/AuthContext'
export default function Feed({username}) {
  const [posts,setPosts]=useState([]);
  const {user}=useContext(AuthContext)
  useEffect(()=>{
    const fetchData=async()=>{
      const res=username? await axios.get("/posts/profile/"+username):await axios.get("/posts/timeline/"+user._id)
      // console.log(res)
      setPosts(res.data)
    }
    fetchData();

  },[username,user._id])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
