import React from "react";
import PostCreation from "../PostCreation/PostCreation";
import CreatePost from "../Post/createPost/CreatePost";
import MiddlePage from '../../Components/MiddlePage/MiddlePage';

import classes from "./style.module.scss";

const Home = () => {
  return (
    <>
      <div className={classes["post-dashboard"]}>
        <div className={classes["post-create"]}>
          <PostCreation />
          <CreatePost />
          <MiddlePage/>
        </div>
      </div>
    </>
  );
};

export default Home;
