import React, {memo, useContext} from 'react';
import styles from "./Courses.module.scss";
import CoursesCard from "./CoursesCard/CoursesCard";
import {TagsContext} from "../../../App";

const Courses = memo(() => {
      const courses = useContext(TagsContext)?.courses

      return (
          <div className={styles.courses}>
            {courses?.map(el => <CoursesCard data={el} key={el.id}/>)}
          </div>
      );
    }
)

export default Courses;