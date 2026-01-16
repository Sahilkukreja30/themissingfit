import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true, // 🔥 REQUIRED for httpOnly cookies
});

export default api;
