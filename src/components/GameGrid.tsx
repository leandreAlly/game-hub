import { Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesresponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get<FetchGamesresponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
