import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
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

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoints, config)
      .then((res) => res.data);
  };
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoints + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
