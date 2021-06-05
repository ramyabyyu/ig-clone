import React from "react";
import PostItem from "./PostItem/PostItem";
import useStyles from "./styles";
import { CircularProgress, Grid } from "@material-ui/core";

import { useSelector } from "react-redux";

const PostContainer = () => {
  const posts = useSelector((state) => state.posts);

  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid item key={post._id} xs={12}>
          <PostItem post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostContainer;
