import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  link: string;
  children: ReactNode;
}

const IconWrapper = ({ link, children }: Props) => {
  return (
    <Box
      as={"a"}
      href={link}
      target={"_blank"}
      border={"2px solid transparent"} // Inicialmente, a borda é transparente
      _hover={{
        transition: "border-color 0.3s ease", // Transição suave apenas para a cor da borda
        borderColor: "grey", // Altera a cor da borda ao passar o mouse
        borderRadius: "20%",
      }}
    >
      {children}
    </Box>
  );
};

export default IconWrapper;
