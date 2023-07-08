import {
  List,
  ListItem,
  Image,
  HStack,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <List paddingY="5px" marginTop={5}>
        <Heading fontSize="3xl" as="h2">
          Genre
        </Heading>
        {data.map((genre) => (
          <ListItem key={genre.id} padding={1}>
            <HStack>
              <Image
                boxSize="30px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                color={genre.id === selectedGenre?.id ? "orange " : "normal"}
                variant="link"
                fontSize="sm"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
