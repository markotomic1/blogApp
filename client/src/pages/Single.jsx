import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";
const Single = () => {
  const [post, setPost] = useState({});
  const id = useLocation().pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("/posts/" + id);
        setPost(res.data);
        window.scrollTo({ top: 0 });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='single'>
      <div className='content'>
        <img src={`../upload/${post?.img}`} alt='' />
        <div className='user'>
          {post.userImage && <img src={post.userImage} alt='' />}
          <div className='info'>
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className='edit'>
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt='' />
              </Link>
              <img src={Delete} alt='' onClick={handleDelete} />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.desc) }}
        ></p>
      </div>
      <div className='menu'>
        <Menu cat={post.cat} />
      </div>
    </div>
  );
};

export default Single;
