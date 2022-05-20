import * as api from "../api";

//action creators
const fetchPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({ type: "FETCH", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchPosts;
