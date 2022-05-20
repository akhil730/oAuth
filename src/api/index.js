import axios from "axios";

const url = "https://194165.sse.codesandbox.io/posts";

const getPosts = () => axios.get(url);

export const createPost = () => axios.post(url, createPost);

export default getPosts;
