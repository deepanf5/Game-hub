import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useData<Platform>("https://api.rawg.io/api/platforms");

export default usePlatforms;
