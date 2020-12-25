import React from "react";
import ImagePost from "./ImagePost";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextPost from "./TextPost";
import { usePosts } from "./usePosts";
import VideoPost from "./VideoPost";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Posts = () => {
  const postsList = usePosts();

  console.log(postsList);
  return (
    <>
      {postsList.length === 0 && (
        <Grid item container justify="center">
          <h1 style={{ fontFamily: "sans-serif" }}>No Posts Yet!</h1>
        </Grid>
      )}
      {postsList.map((post, index) => {
        const date = new Date(post.date);
        const renderedDate = `${
          months[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

        return (
          <Grid item container justify="center" key={index}>
            {post.image === "" && post.video === "" && (
              <TextPost post={{ ...post, date: renderedDate }} />
            )}
            {post.image !== "" && post.video === "" && (
              <ImagePost post={{ ...post, date: renderedDate }} />
            )}
            {post.image === "" && post.video !== "" && (
              <></>
              //<VideoPost post={{ ...post, date: renderedDate }} />
            )}
          </Grid>
        );
      })}
      {/* <video
        controls
        autostart
        autoPlay
        src=""
        //type={this.props.type}
      /> */}
    </>
  );
};

export default Posts;
