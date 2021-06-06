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
    // <Card className={classes.root}>
    //   <CardHeader
    //     avatar={
    //       <Avatar aria-label="username" className={classes.avatar}>
    //         RA
    //       </Avatar>
    //     }
    //     action={
    //       <IconButton aria-label="more">
    //         <MoreVertIcon />
    //       </IconButton>
    //     }
    //     title={post.user}
    //     subheader="Example Post wkkwkw"
    //   />
    //   <img
    //     src={post.content}
    //     alt="example post media"
    //     className={classes.media}
    //   />
    // </Card>
    <img
      src={`http://127.0.0.1:8080/public/content/${post.content.replace(
        "\\",
        "/"
      )}`}
      alt=""
    />
  );
};

export default PostItem;
