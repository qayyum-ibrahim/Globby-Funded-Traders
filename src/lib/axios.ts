import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
export const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token"); // Logout: remove token
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error); // Still reject so individual calls can handle errors too
  }
);
