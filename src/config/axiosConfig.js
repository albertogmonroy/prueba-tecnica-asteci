import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "https://api.datos.gob.mx/v1/",
});
