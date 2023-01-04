import { db } from "../db.js";
import jwt from "jsonwebtoken";
export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT posts.id,`username`,`title`,`desc`,posts.img,users.img AS userImage,`cat`,`date` FROM users JOIN posts on users.id=posts.uid where posts.id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, data) => {
    if (err) return res.status(403).json("Token not valid");

    const q =
      "INSERT INTO posts(`title`,`desc`,`img`,`cat`,`date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      data.id,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, data) => {
    if (err) return res.status(403).json("Token not valid");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id`=? AND `uid`= ?";

    db.query(q, [postId, data.id], (err, data) => {
      if (err) return res.status(403).json("You can only delete your post");

      return res.status(200).json("Post has been deleted");
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, data) => {
    if (err) return res.status(403).json("Token not valid");

    const postId = req.params.id;

    const q =
      "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id`=? AND `uid`=?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];
    db.query(q, [...values, postId, data.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been updated");
    });
  });
};
