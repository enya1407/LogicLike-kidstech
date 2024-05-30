import React from 'react';
import styles from "./Content.module.scss";
import TagsBar from "./TagsBar/TagsBar";
import Courses from "./Сourses/Courses";

const Content = () => {
  return (
      <div className={styles.content}>
        <TagsBar/>
        <Courses/>
      </div>
  );
}


export default Content;