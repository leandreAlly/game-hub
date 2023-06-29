import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-clients";

const apiClients = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres"); fetching from server
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClients.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
