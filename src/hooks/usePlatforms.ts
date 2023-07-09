import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import APIClient from "../services/api-clients";

const apiClients = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClients.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;

// useData<Platform>("/platforms/lists/parents");
