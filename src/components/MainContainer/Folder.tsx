import { Card, HStack, Icon, Text } from "@chakra-ui/react";
import { BsFolder } from "react-icons/bs";

interface Props {
  folderName: string;
}

const Folder = ({ folderName }: Props) => {
  return (
    <Card bg={"#f0f4f9"} display={"inline"} padding={3}>
      <HStack>
        <Icon as={BsFolder} boxSize={6} />
        <Text>{folderName}</Text>
      </HStack>
    </Card>
  );
};

export default Folder;

/**
 * TODO: Adicionar hover deixando a pasta mais escura e
 * o ícone preenchido
 */
