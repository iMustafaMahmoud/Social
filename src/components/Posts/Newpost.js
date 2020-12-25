import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { addPost } from "../../actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import FilterBar from "./../FiltersBar";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const defaultPost = {
  name: "Mustafa Mahmoud",
  avatar: "/assets/user-5.jpg",
  date: "",
  descripton: "",
  video: "",
  image: "",
  category: "",
  tag: "",
};
const NewPost = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const AddPost = addPost(dispatch);
  const classes = useStyles();
  const [post, setPost] = useState(defaultPost);

  const handleFileExplorer = (event) => (url) => {
    console.log("Here but", url);
    setPost((prevPost) => {
      return { ...prevPost, image: `/assets/${url}` };
    });
  };

  const handleFiterBarTag = (event) => {
    setPost((prevPost) => {
      return { ...prevPost, tag: event.target.value };
    });
  };

  const handleFiterBar = (event) => {
    setPost((prevPost) => {
      return { ...prevPost, category: event.target.value };
    });
  };

  const handleDescription = (event) => {
    setPost((prevPost) => {
      return { ...prevPost, descripton: event.target.value };
    });
  };

  const category = categories.find(
    (category) => category.name === post.category
  );
  const onImageChange = (event) => {
    console.log(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    console.log(url);
    setPost({ ...post, image: url });
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            src={post.avatar}
            aria-label="recipe"
            className={classes.large}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.name}
      />
      <Box padding="0px 10px">
        <Box marginBottom="10px">
          <TextField
            id="outlined-basic"
            placeholder="What's on your mind"
            variant="outlined"
            fullWidth
            multiline
            onChange={handleDescription}
            value={post.descripton}
          />
        </Box>
        {post.image !== "" && (
          <CardMedia className={classes.media} image={post.image} />
        )}
      </Box>
      <CardActions>
        <input type="file" name="myImage" onChange={onImageChange} />

        <FilterBar
          widthPer="25%"
          handleFiterBar={handleFiterBar}
          value={post.category}
          categories={categories}
        />
        <FilterBar
          widthPer="25%"
          handleFiterBar={handleFiterBarTag}
          value={post.tag}
          categories={post.category === "" ? [] : category.tags}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (post.descripton === "") {
              alert("Description cant be empty");
            } else {
              AddPost({
                ...post,
                date: Date.now(),
              });
              setPost(defaultPost);
            }
          }}
        >
          Post
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewPost;
