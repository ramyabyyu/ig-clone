import axios from "axios";
import { apiUrl as url } from "../../apiUrl";

export const getPosts = () => axios.get(`${url}/api/post`);
export const createPost = (post) => axios.post(`${url}/api/post`, post);
