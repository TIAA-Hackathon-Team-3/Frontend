import React from "react";
import CreatePost from "../Post/createPost/CreatePost";
import MiddlePage from '../../Components/MiddlePage/MiddlePage';

import classes from "./style.module.scss";

const Home = () => {
  return (
    <>
      <div className={classes["post-dashboard"]}>
        <div className={classes["post-create"]}>
          <CreatePost />
          <MiddlePage/>
        </div>
      </div>
    </>
  );
};

export default Home;
