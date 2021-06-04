import React from "react";
import { Button, Card, CardActions, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import * as Path from "../../routeNames";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item md={7} xs={12}>
        <Card className={classes.card}>
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              component={Link}
              to={Path.POST}
            >
              <AddIcon fontSize="large" color="inherit" /> Add Post
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
