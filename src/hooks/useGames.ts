import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponses } from "../services/api-clients";
import { Platform } from "./usePlatforms";

const apiClients = new APIClient<Game>("/games");
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponses<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClients.getAllGames({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
