import React, {memo} from 'react';
import styles from "./CoursesCard.module.scss";
import {ICourses} from "../../../../Types/types";

const CoursesCard = memo(({data}: { data: ICourses }) => {
      const style: React.CSSProperties = {
        backgroundColor: data.bgColor,
      }
      
      return (
          <div className={styles.coursesCard}>
            <div className={styles.imageContainer} style={style}>
              <img className={styles.image} src={data.image} alt={data.name}/>
            </div>
            <p className={styles.name}>{data.name}</p>
          </div>
      );
    }
)

export default CoursesCard;