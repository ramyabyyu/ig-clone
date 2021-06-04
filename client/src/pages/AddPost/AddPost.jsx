import React, { useRef } from "react";
import { Button, Card, Container } from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "./styles";

const AddPost = () => {
  // for images
  const hiddenImageInput = useRef(null);
  const handleImageInput = (e) => hiddenImageInput.current.click();

  // for videos
  const hiddenVideoInput = useRef(null);
  const handleVideoInput = (e) => hiddenVideoInput.current.click();

  const classes = useStyles();
  return (
    <Container>
      <Card className={classes.card}>
        <form>
          <div className={classes.inputs}>
            <textarea
              className={classes.textarea}
              placeholder="Caption"
            ></textarea>
            <input
              type="text"
              name="tags"
              placeholder="Tags (separated by comma)"
              className={classes.tagsInput}
            />
          </div>
          <div className={classes.buttons}>
            <input
              type="file"
              ref={hiddenImageInput}
              accept="image/*"
              style={{ display: "none" }}
            />
            <input
              type="file"
              ref={hiddenVideoInput}
              accept="video/*"
              style={{ display: "none" }}
            />
            <Button color="inherit" onClick={handleImageInput}>
              <AddAPhotoIcon className={classes.addPhotoIcon} />
            </Button>
            <Button color="inherit" onClick={handleVideoInput}>
              <VideoCallIcon className={classes.videoCallIcon} />
            </Button>
            <Button color="primary" variant="outlined">
              Send Post <SendIcon className={classes.sendIcon} />
            </Button>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default AddPost;
