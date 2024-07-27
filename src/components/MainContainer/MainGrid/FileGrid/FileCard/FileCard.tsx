import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react";
import { File } from "../../../../../data/files";
import {
  BsFileEarmark,
  BsFileEarmarkFill,
  BsImage,
  BsImageFill,
} from "react-icons/bs";
import { useState } from "react";
import TextMaxLength from "../../../../utils/TextMaxLength";

interface Props {
  file: File;
}

const FileCard = ({ file }: Props) => {
  const [hover, setHover] = useState(false);

  let isImage = "alt" in file.type;
  let iconPair = isImage
    ? [BsImage, BsImageFill]
    : [BsFileEarmark, BsFileEarmarkFill];

  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      borderRadius={10}
      bg={"#f0f4f9"}
      _hover={{
        backgroundColor: "#dfe3e7",
        transition: "backgroundColor, .2s",
      }}
    >
      <CardHeader marginBottom={0}>
        <Flex alignItems={"center"} gap={{ base: 3, xl: 5 }}>
          <Icon
            as={iconPair[0]}
            boxSize={4}
            position={"absolute"}
            opacity={hover ? 0 : 1}
            transition={"opacity .2s"}
          />
          <Icon
            as={iconPair[1]}
            boxSize={4}
            opacity={hover ? 1 : 0}
            transition={"opacity .2s"}
          />
          <TextMaxLength
            maxLen={{ base: 25, md: 20, lg: 17, xl: 20, "2xl": 35 }}
          >
            {file.name}
          </TextMaxLength>
        </Flex>
      </CardHeader>
      <CardBody padding={3}>
        <Flex
          maxHeight={"220px"}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}
        >
          {isImage && <Image borderRadius={5} src={file.type.url} />}
          {!isImage && (
            <>
              <Icon
                as={iconPair[0]}
                boxSize={40}
                paddingTop={5}
                position={"absolute"}
                opacity={hover ? 0 : 1}
                transition={"opacity .2s"}
              />
              <Icon
                paddingTop={5}
                as={iconPair[1]}
                boxSize={40}
                opacity={hover ? 1 : 0}
                transition={"opacity .2s"}
              />
            </>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default FileCard;
