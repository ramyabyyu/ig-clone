import React, { useRef } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import * as Path from "../../routeNames";
import useStyles from "./style";

const UploadProfilePicture = () => {
  const hiddenUploadPhoto = useRef(null);
  const handleUploadPhoto = (e) => {
    hiddenUploadPhoto.current.click();
  };
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={3}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography variant="h5">
            Hello Ramy Abyyu! Do you want to upload profile picture?
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <input
            type="file"
            ref={hiddenUploadPhoto}
            style={{ display: "none" }}
            accept="image/*"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUploadPhoto}
          >
            Yes, Upload Photo
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={Path.HOME}
          >
            No, use default photo instead
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default UploadProfilePicture;
