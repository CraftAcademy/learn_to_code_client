import React from "react";

import classes from "./IndexPage.module.css";
import { Categories } from "./Categories/Categories";

export const IndexPage = () => {
  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.title}>LEARN TO CODE</h1>
      <p className={classes.subTitle}>subtitle goes here</p>
      <div className={classes.categoriesContainer}>
      <Categories />
      </div>
    </div>
  );
};
