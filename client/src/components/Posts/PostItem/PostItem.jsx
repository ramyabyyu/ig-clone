import React from "react";
import useStyles from "./styles";
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { apiUrl } from "../../../apiUrl";

const PostItem = ({ post }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="username" className={classes.avatar}>
            RA
          </Avatar>
        }
        action={
          <IconButton aria-label="more">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.user}
        subheader="Example Post wkkwkw"
      />
      <img
        src={`${apiUrl}/${post.content.replace("\\", "/")}`}
        alt="example post media"
        className={classes.media}
      />
    </Card>
  );
};

export default PostItem;
