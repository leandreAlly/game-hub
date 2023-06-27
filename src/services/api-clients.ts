import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
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

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoints,
      config
    );

    return res.data;
  };
}

export default APIClient;
