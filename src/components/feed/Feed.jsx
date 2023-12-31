import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from 'axios'
export default function Feed({username}) {
  const [posts,setPosts]=useState([]);
  
  useEffect(()=>{
    const fetchData=async()=>{
      const res=username? await axios.get("/posts/profile/"+username):await axios.get("/posts/timeline/64c250e9a9cafd282d9f6c26")
      console.log(res)
      setPosts(res.data)
    }
    fetchData();

  },[username])
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
