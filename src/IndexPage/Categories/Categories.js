import React, { useState } from "react";

import classes from "./Categories.module.css";

export const Categories = () => {
  const [categories, setCategories] = useState([
    { title: "First category", items: ["HTML", "CSS"] },
    { title: "Second category", items: ["HTML", "CSS"] },
    { title: "Third category", items: ["HTML", "CSS"] },
    { title: "Forth category", items: ["HTML", "CSS"] }
  ]);
  return (
    <div className={classes.categoriesContainer}>
      {categories.map(category => {
        return (
          <div className={classes.categoryContainer}>
            <h2 className={classes.title}>{category.title.toUpperCase()}</h2>
            <div className={classes.itemsContainer}>
              {category.items.map(item => {
                return <p className={classes.item}>{item}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
