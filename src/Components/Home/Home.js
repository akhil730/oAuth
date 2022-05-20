import React, { useEffect } from "react";
import { Container, Grid, Grow } from "@material-ui/core";
import Posts from "../../Components/Posts/Posts";
import Form from "../../Components/Form/Form";
import { useDispatch } from "react-redux";
import fetchPosts from "../../actions/posts";
import makeStyles from "./styles";

const Home = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  //  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          Container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={4}>
            <Posts />
          </Grid>
          <Grid item xs={7} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
