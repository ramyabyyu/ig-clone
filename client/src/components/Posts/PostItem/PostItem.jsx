import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";

// helpers
import { checkFileType } from "../../../helpers/checkFileType";

const PostItem = ({ post }) => {
  const [captionExpanded, setCaptionExpanded] = useState(false);

  const handleCaptionExpanded = () => {
    setCaptionExpanded(!captionExpanded);
  };

  const handleVideoPlay = () => {
    const video = document.getElementById(`video${post._id}`);
    const playIcon = document.getElementById(`play${post._id}`);
    video.play();
    playIcon.style.display = "none";
    video.style.cursor = "pointer";
  };

  const handleVideoEnd = () => {
    const video = document.getElementById(`video${post._id}`);
    const playIcon = document.getElementById(`play${post._id}`);
    video.pause();
    playIcon.style.display = "block";
    video.style.cursor = "auto";
  };

  const handleVideoPause = () => {
    const video = document.getElementById(`video${post._id}`);
    const playIcon = document.getElementById(`play${post._id}`);
    playIcon.style.display = "block";
    video.style.cursor = "auto";
  };

  useEffect(() => {
    if (post.caption.length < 116) setCaptionExpanded(true);
    else setCaptionExpanded(false);
  }, [post]);

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
            id={`video${post._id}`}
            className={classes.video}
            onEnded={handleVideoEnd}
            onPause={handleVideoPause}
            onClick={handleVideoEnd}
          >
            <source src={post.content} type="video/mp4" />
          </video>
          <PlayArrowRoundedIcon
            id={`play${post._id}`}
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
        {captionExpanded ? (
          <>
            <Typography variant="body2" component="p">
              {post.caption}
            </Typography>
            <Typography variant="body2" component="p" className={classes.tags}>
              {post.tags.length > 0 ? (
                <>{post.tags.map((tag) => (tag !== "" ? `#${tag} ` : ""))}</>
              ) : (
                ""
              )}
            </Typography>
            <Typography
              variant="body2"
              className={classes.createdAt}
              component="p"
            >
              {moment(post.createdAt).fromNow()}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body2" component="p">
              {post.caption.substring(0, 115) + "..."}
            </Typography>
            <Typography component={Button} onClick={handleCaptionExpanded}>
              Show More
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PostItem;
