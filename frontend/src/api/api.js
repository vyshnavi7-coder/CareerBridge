import axios from "axios";

const API = axios.create({
  baseURL: "https://careerbridge-backend-65et.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;