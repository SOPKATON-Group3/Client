import axios from "axios";

export const serverAxios = axios.create({
  baseURL: "http://localhost:3000",
});
