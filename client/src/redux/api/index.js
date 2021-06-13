import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:8080/api" });

API.interceptors.request.use((req) => {
  const authToken = localStorage.getItem("token");
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken).token}`;
  }

  return req;
});

// Auth
export const register = (formData) => API.post("/register", formData);
export const changeProfilePicture = (id, avatar) => {
  API.post(`/change-profile-picture/${id}`, avatar);
};
export const login = (formData) => API.post("/login", formData);

// Post
export const getPosts = () => API.get("/post");
export const createPost = (newPost) => API.post("/post", newPost);
