import fire from "../assets/fire.png";
import thumbsUp from "../assets/star-rating.png";
import ok from "../assets/emoji.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: ok, alt: "ok" },
    4: { src: thumbsUp, alt: "thumbsUp" },
    5: { src: fire, alt: "fire" },
  };

  return (
    <>
      <Image marginTop={2} {...emojiMap[rating]} boxSize="25" />
    </>
  );
};

export default Emoji;
