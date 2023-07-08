import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack marginTop={2} justifyContent="space-between" paddingEnd="10px">
        <Image src={logo} boxSize="40px" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
