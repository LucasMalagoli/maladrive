import { HStack } from "@chakra-ui/react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import IconTray from "./IconTray";

const Header = () => {
  return (
    <HStack height={{ base: "70px", lg: "100px" }}>
      <Logo />
      <SearchBar />
      <IconTray />
    </HStack>
  );
};

/**
 * TODO: Logo e nome, Barra de Pesquisa, Ícones para Instagram/Linkedin/Github
 *  */

export default Header;
