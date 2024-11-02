import axios, { AxiosInstance } from "axios";

const getInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });
};

export default getInstance;
