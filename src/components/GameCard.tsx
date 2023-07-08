import { Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading marginBottom="1px" fontSize="xs">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
