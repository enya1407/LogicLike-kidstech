import React, {memo, useContext} from 'react';
import styles from "./Tag.module.scss";
import {TagsContext} from "../../../../App";

const Tag = memo(({tag}: { tag: string }) => {
      const context = useContext(TagsContext)
      const isActive = tag === context?.active

      function tagHandler() {
        !isActive && context?.setActive(tag)
      }

      return (
          <button className={isActive ? styles.activeTag : styles.tag} onClick={tagHandler}>
            <span>{tag}</span>
          </button>
      );
    }
)

export default Tag;