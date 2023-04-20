import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres"); fetching from server
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
