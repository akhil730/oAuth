import React from "react";
import makeStyles from "./styles";
import { useSelector } from "react-redux";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const classes = makeStyles();
  console.log("posts", posts);
  return <h1> POST</h1>;
};

export default Post;
