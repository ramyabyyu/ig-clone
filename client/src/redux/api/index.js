import axios from "axios";
import { apiUrl } from "../../apiUrl";

const url = `${apiUrl}/api`;

export const getPosts = () => axios.get(`${url}/post`);
export const createPost = (post) => axios.post(`${url}/post`, post);
