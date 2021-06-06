import React from "react";
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
import MoreVertIcon from "@material-ui/icons/MoreVert";

// helpers
import { checkFileType } from "../../../helpers/checkFileType";

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
      <CardMedia
        className={classes.media}
        image={post.content}
        title={`${post.user}'s post`}
      />
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
      </CardContent>
    </Card>
  );
};

export default PostItem;
