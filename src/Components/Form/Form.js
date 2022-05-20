import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import makeStyles from "./styles";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import FileBase from "react-file-base64";
const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  });
  const classes = makeStyles();

  const dispatch = useDispatch();

  const handleForm = () => {};

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
    console.log(postData);
  };

  const handleClear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        onSubmit={handleForm}
      >
        <Typography variant="h5">React Form </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          label="title"
          variant="outlined"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          label="message"
          variant="outlined"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          label="tags"
          variant="outlined"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <FileBase
          className={classes.fileInput}
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="small"
          color="primary"
          onClick={submitHandler}
        >
          Submit
        </Button>
        <Button
          onClick={handleClear}
          variant="contained"
          size="small"
          color="secondary"
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
