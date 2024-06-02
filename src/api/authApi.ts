import axios from "axios";

const BASE_URL = "https://api-server.lilohr.com/";

export const authApi = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";
