import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// helpers
import { checkFileType } from "../../../helpers/checkFileType";

const PostItem = ({ post }) => {
  const handleVideoPlay = () => {
    const video = document.getElementById("video");
    const playIcon = document.getElementById("playVideoIcon");

    video.play();
    playIcon.style.display = "none";
    video.style.cursor = "pointer";
  };

  const handleVideoEnd = () => {
    const video = document.getElementById("video");
    const playIcon = document.getElementById("playVideoIcon");
    video.pause();
    playIcon.style.display = "block";
    video.style.cursor = "auto";
  };

  const handleVideoPause = () => {
    const video = document.getElementById("video");
    const playIcon = document.getElementById("playVideoIcon");
    playIcon.style.display = "block";
    video.style.cursor = "auto";
  };

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
        subheader="Ngetes doang awokaokwokaw"
      />
      {checkFileType(post.content) === "image" ? (
        <CardMedia
          className={classes.media}
          image={post.content}
          title={`${post.user}'s post`}
        />
      ) : (
        <div className={classes.mediaVideo}>
          <video
            id="video"
            className={classes.video}
            onEnded={handleVideoEnd}
            onPause={handleVideoPause}
            onClick={handleVideoEnd}
          >
            <source src={post.content} type="video/mp4" />
          </video>
          <PlayArrowRoundedIcon
            id="playVideoIcon"
            className={classes.playVideoIcon}
            onClick={handleVideoPlay}
          />
        </div>
      )}
      <CardActions disableSpacing className={classes.cardActions}>
        <div>
          <IconButton aria-label="like post">
            <FavoriteBorderOutlinedIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="comment post">
            <ModeCommentOutlinedIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="share post">
            <SendOutlinedIcon fontSize="large" className={classes.shareIcon} />
          </IconButton>
        </div>
        <IconButton aria-label="comment post">
          <BookmarkBorderOutlinedIcon fontSize="large" />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.caption}
        </Typography>
        <Typography variant="body2" className={classes.tags} component="p">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostItem;
