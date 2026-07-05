import axios from "axios";

const resumeAPI = axios.create({
  baseURL: "https://careerbridge-backend-65et.onrender.com/api/resume",
});

export default resumeAPI;