import React, { useRef, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as Path from "../../routeNames";
import useStyles from "./style";

// actions
import { changeProfilePicture } from "../../redux/actions/profile";

const UploadProfilePicture = () => {
  const authToken = JSON.parse(localStorage.getItem("token"));
  const user = authToken?.data;
  const history = useHistory();
  const dispatch = useDispatch();

  const [profilePreview, setProfilePreview] = useState(null);
  const [profileData, setProfileData] = useState({ avatar: null });

  const hiddenUploadProfileBtn = useRef(null);
  const handleUploadProfileBtn = (e) => {
    hiddenUploadProfileBtn.current.click();
  };

  const handleProfileChange = (image) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePreview(reader.result);
      setProfileData({ avatar: reader.result });
    };

    reader.readAsDataURL(image);
  };

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {authToken ? (
        <>
          <CardContent className={classes.cardContent}>
            <Avatar
              className={classes.avatar}
              alt={user.name}
              src={user.avatar}
            >
              <AccountCircleIcon />
            </Avatar>
            <Typography variant="h5">
              {user.avatar
                ? `Hello ${
                    user.name.split(" ")[0]
                  }! Do you want to change your profile picture?`
                : `Hello ${
                    user.name.split(" ")[0]
                  }! Do you want to upload profile picture?`}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <input
              type="file"
              ref={hiddenUploadProfileBtn}
              style={{ display: "none" }}
              accept="image/*"
              onChange={(e) => handleProfileChange(e.target.files[0])}
            />
            {user.avatar ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUploadProfileBtn}
                >
                  Change Picture
                </Button>
                <Button variant="contained" color="secondary">
                  Delete Picture
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUploadProfileBtn}
                >
                  Yes, upload a picture
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={Path.HOME}
                >
                  No, use default picture instead
                </Button>
              </>
            )}
          </CardActions>
          {profilePreview && (
            <>
              <Avatar
                src={profilePreview}
                alt="Profile"
                className={classes.profilePreview}
              >
                <AccountCircleIcon />
              </Avatar>
              <Button
                color="primary"
                variant="contained"
                onClick={() =>
                  dispatch(changeProfilePicture(user._id, profileData, history))
                }
              >
                Upload
              </Button>
            </>
          )}
        </>
      ) : (
        <Typography variant="h5">Please login first</Typography>
      )}
    </Card>
  );
};

export default UploadProfilePicture;
