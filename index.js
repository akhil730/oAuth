import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { Container } from "@material-ui/core";
import makeStyles from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./src/Components/Navbar/Navbar";
import Auth from "./src/Components/Auth/Auth";
//redux
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import fetchPosts from "./src/actions/posts";
import thunk from "redux-thunk";
import reducers from "./src/reducers";
import Home from "./src/Components/Home/Home";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function App() {
  const classes = makeStyles();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  //  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
      {/* // <Button variant="contained" color="primary">
    //   Hello World
    // </Button> */}
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
