import axios from "axios";

export const serverAxios = axios.create({
  baseURL: "http://15.165.160.167:8000",
});
