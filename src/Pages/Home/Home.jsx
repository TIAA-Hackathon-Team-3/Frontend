import React from "react";
import PostCreation from "../PostCreation/PostCreation";
import CreatePost from "../Post/createPost/CreatePost";
import classes from "./style.module.scss";

const Home = () => {
  return (
    <>
      <div className={classes["post-dashboard"]}>
        <div className={classes["post-create"]}>
          <PostCreation />
          <CreatePost />
        </div>
      </div>
    </>
  );
};

export default Home;
