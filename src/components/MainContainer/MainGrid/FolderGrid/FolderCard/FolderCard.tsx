import { Card, HStack, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsFolder, BsFolderFill } from "react-icons/bs";

interface Props {
  folderName: string;
}

const FolderCard = ({ folderName }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      _hover={{
        backgroundColor: "#dfe3e7",
        transition: "backgroundColor, .2s",
      }}
      bg={"#f0f4f9"}
      display={"inline"}
      padding={3}
    >
      <HStack>
        <Icon
          as={BsFolder}
          boxSize={5}
          position={"absolute"}
          opacity={hover ? 0 : 1}
          transition={"opacity .2s"}
        />
        <Icon
          as={BsFolderFill}
          boxSize={5}
          opacity={hover ? 1 : 0}
          transition={"opacity .2s"}
        />
        <Text fontWeight={500} cursor={"default"}>
          {folderName}
        </Text>
      </HStack>
    </Card>
  );
};

export default FolderCard;
