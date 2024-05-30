import React, {memo, useContext} from 'react';
import styles from "./TagsBar.module.scss";
import Tag from "./Tag/Tag";
import {TagsContext} from "../../../App";

const TagsBar = memo(() => {
      const tags = useContext(TagsContext)?.tags

      return (
          <div className={styles.tagsBar}>
            {tags?.map((el, i) => <Tag tag={el} key={el}/>)}
          </div>
      );
    }
)

export default TagsBar;