import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import AddPostButton from "../../components/AddPostButton/AddPostButton";
import PostContainer from "../../components/Posts/PostContainer";

import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/posts";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      {/* add post form */}
      <Grid container spacing={3}>
        <Grid item md={7} xs={12}>
          <AddPostButton />
        </Grid>
      </Grid>
      {/* post container */}
      <Grid container spacing={3}>
        <Grid item md={7} xs={12}>
          <PostContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
