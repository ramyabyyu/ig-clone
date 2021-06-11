import React from "react";
import { Button, Card, CardActions, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import * as Path from "../../routeNames";
import useStyles from "./styles";

const AddPostButton = () => {
  const classes = useStyles();
  const isAuth = localStorage.getItem("token");
  return (
    <Card className={classes.card}>
      <CardActions>
        <Button
          color={isAuth ? "primary" : "inherit"}
          variant="contained"
          component={Link}
          to={isAuth ? Path.POST : Path.AUTH}
        >
          {isAuth ? (
            <>
              <AddIcon fontSize="large" color="inherit" /> Add Post
            </>
          ) : (
            <>
              <Typography variant="body2" component="p">
                Login here to create some amazing post
              </Typography>
            </>
          )}
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddPostButton;
