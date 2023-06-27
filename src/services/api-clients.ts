import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface FetchResponses<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e9d9643003f54941b934e5762d1f30a7",
  },
});

class APIClient<T> {
  endpoints: string;

  constructor(endpoints: string) {
    this.endpoints = endpoints;
  }

  getAllGames = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponses<T>>(this.endpoints, config)
      .then((res) => res.data);
  };
  getAll = () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoints)
      .then((res) => res.data);
  };
}

export default APIClient;
