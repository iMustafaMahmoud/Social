import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts/Posts";
import Grid from "@material-ui/core/Grid";
import NewPost from "./components/Posts/Newpost";
import FiltersBar from "./components/FiltersBar";
import VideoPost from "./components/Posts/VideoPost";
import FiltersHeader from "./components/FiltersHeader";

const App = () => {
  const most = useSelector((state) => state.mostRecent);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          {/* <MyDrawer /> */}

          <Grid container>
            <Grid container spacing={4} item xs={12}>
              <Grid item container justify="center">
                <NewPost />
              </Grid>
              <Grid item container justify="center">
                <FiltersHeader />
              </Grid>
              <Posts />
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
