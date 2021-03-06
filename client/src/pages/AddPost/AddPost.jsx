import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Container } from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "./styles";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { createPost } from "../../redux/actions/posts";

const postInitialState = {
  user: "Ramy Abyyu",
  caption: "",
  content: null,
  tags: "",
};

const AddPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // state hooks
  const [postData, setPostData] = useState(postInitialState);
  const [contentPreview, setContentPreview] = useState(null);
  const [contentFileType, setContentFileType] = useState("");

  // for images
  const hiddenImageInput = useRef(null);
  const handleImageInput = (e) => hiddenImageInput.current.click();

  // for videos
  const hiddenVideoInput = useRef(null);
  const handleVideoInput = (e) => hiddenVideoInput.current.click();

  // file change
  const handleFileChange = (files) => {
    setPostData({ ...postData, content: files });
  };

  //   handlesubmit
  const handlePostSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ ...postData, content: contentPreview }, history));
  };

  // preview image and video
  useEffect(() => {
    if (postData.content) {
      const reader = new FileReader();
      reader.onloadend = () => {
        let result = reader.result;
        let fileType = result.substring(5, 10);

        if (fileType === "image") {
          setContentFileType("image");
          setContentPreview(result);
        } else {
          setContentFileType("video");
          setContentPreview(result);

          const video = document.getElementById("video");
          const source = document.getElementById("source");
          source.setAttribute("src", result);
          video.load();
          video.play();
        }
      };
      reader.readAsDataURL(postData.content);
    } else setContentPreview(null);
  }, [postData.content]);

  const classes = useStyles();
  return (
    <Container>
      <Card className={classes.card}>
        <form onSubmit={handlePostSubmit}>
          <div className={classes.inputs}>
            <textarea
              className={classes.textarea}
              placeholder="Caption"
              onChange={(e) =>
                setPostData({ ...postData, caption: e.target.value })
              }
            ></textarea>
            <input
              type="text"
              name="tags"
              placeholder="Tags (separated by comma)"
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value })
              }
              className={classes.tagsInput}
            />
          </div>
          <div
            className={contentPreview ? classes.preview : classes.displayNone}
          >
            {contentFileType === "image" ? (
              <img src={contentPreview} className={classes.imgPreview} />
            ) : (
              <video autoPlay id="video" width={320} height={240} controls>
                <source id="source" type="video/mp4" />
                We only support for mp4 video
              </video>
            )}
          </div>
          <div className={classes.buttons}>
            <input
              type="file"
              ref={hiddenImageInput}
              accept="image/*"
              onChange={(e) => handleFileChange(e.target.files[0])}
              style={{ display: "none" }}
            />
            <input
              type="file"
              ref={hiddenVideoInput}
              accept="video/*"
              onChange={(e) => handleFileChange(e.target.files[0])}
              style={{ display: "none" }}
            />
            <Button color="inherit" onClick={handleImageInput}>
              <AddAPhotoIcon className={classes.addPhotoIcon} />
            </Button>
            <Button color="inherit" onClick={handleVideoInput}>
              <VideoCallIcon className={classes.videoCallIcon} />
            </Button>
            <Button type="submit" color="primary" variant="outlined">
              Send Post <SendIcon className={classes.sendIcon} />
            </Button>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default AddPost;
