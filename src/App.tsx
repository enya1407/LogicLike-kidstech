import React, {createContext, memo, useEffect, useState} from 'react';
import styles from './App.module.scss';
import Content from "./Components/Content/Content";
import {ICourses, ITagsContext} from "./Types/types";
import getCourses from "./Api/getCourses";


export const TagsContext = createContext<ITagsContext | null>(null);

const DEFAULT_THEME = "Все темы";

const INITIAL_TAGS = [DEFAULT_THEME]

const App = memo(() => {
      const [activeTag, setActiveTags] = useState<string>(DEFAULT_THEME)
      const [courses, setCourses] = useState<ICourses[]>([])

      const tags = courses.reduce<string[]>((acc, el) => {
        const temp = [...acc]
        el.tags.forEach(tag => {
          if (!temp.includes(tag)) {
            temp.push(tag)
          }
        })

        return temp
      }, INITIAL_TAGS) ?? INITIAL_TAGS

      const activeCourses = activeTag === DEFAULT_THEME
          ? courses
          : courses.filter(el => el.tags.includes(activeTag))

      useEffect(() => {
        getCourses().then(setCourses);
      }, [])

      return (
          <div className={styles.App}>
            <TagsContext.Provider value={{tags, courses: activeCourses, active: activeTag, setActive: setActiveTags}}>
              <Content/>
            </TagsContext.Provider>
          </div>
      );
    }
)

export default App;

