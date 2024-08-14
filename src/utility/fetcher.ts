import axios from "axios";
import { BACKEND_URL } from "./constants";

const api = axios.create({
    baseURL : BACKEND_URL,
    withCredentials : true,
    timeout : 15000
})

export default api;