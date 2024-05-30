const URL = "https://logiclike.com/docs/courses.json"

const getCourses = async () => {
  const response = await fetch(URL);
  return await response.json();
};

export default getCourses;