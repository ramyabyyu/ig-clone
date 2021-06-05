import axios from "axios";

const url = "http://127.0.0.1:8080/api";

export const getPosts = () => axios.get(`${url}/post`);
export const createPost = (post) => axios.post(`${url}/post`, post);
