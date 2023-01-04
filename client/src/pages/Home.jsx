import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("/posts" + cat);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [cat]);
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={`../upload/${post.img}`} alt='' />
            </div>
            <div className='content'>
              <Link to={`/post/${post.id}`} className='link'>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
