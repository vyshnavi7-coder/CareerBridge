import axios from "axios";

const resumeAPI = axios.create({
  baseURL: "http://localhost:5000/api/resume",
});

export default resumeAPI;