
const API_URL = process.env.REACT_APP_API_URL;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

export const fetchProjects = async (page = 0, size = 30) => {
  try {
    const response = await fetch(
      `${API_URL}?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}&isPagination=true&size=${size}&page=${page}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.projects) {
      throw new Error("Data is missing or incorrect");
    }

    return data.projects; 
  } catch (error) {
    throw new Error(error.message);
  }
};
