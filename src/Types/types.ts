export interface ITagsContext {
  tags: string[],
  active: string;
  courses: ICourses[] | null;
  setActive: (id: string) => void;
}

export interface ICourses {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}
