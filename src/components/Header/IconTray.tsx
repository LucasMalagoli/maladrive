import { Avatar, HStack } from "@chakra-ui/react";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import IconWrapper from "./IconWrapper";

const IconTray = () => {
  const iconSize = "40px";
  return (
    <HStack width={"20%"} gap={8} justifyContent={"flex-end"} paddingRight={10}>
      <IconWrapper link="https://github.com/LucasMalagoli">
        <FaGithubSquare fill="black" color="white" size={iconSize} />
      </IconWrapper>
      <IconWrapper link="https://www.linkedin.com/in/lucas-malagoli-porto-dos-santos-15b94a23a/">
        <FaLinkedin size={iconSize} />
      </IconWrapper>
      <IconWrapper link="https://www.instagram.com/malagolilucas/">
        <FaInstagramSquare size={iconSize} />
      </IconWrapper>
      <Avatar />
    </HStack>
  );
};

export default IconTray;
