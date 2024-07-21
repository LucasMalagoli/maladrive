import { SimpleGrid } from "@chakra-ui/react";
import Folder from "./Folder";

interface Props {
  folders: string[];
}

const MainGrid = ({ folders }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, xl: 5 }} gap={6}>
      {folders.map((folderName) => (
        <Folder key={folderName} folderName={folderName} />
      ))}
    </SimpleGrid>
  );
};

export default MainGrid;
