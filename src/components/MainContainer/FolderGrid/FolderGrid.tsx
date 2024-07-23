import { SimpleGrid } from "@chakra-ui/react";
import FolderCard from "./FolderCard/FolderCard";
import { folders } from "../../../data/folders";

const FolderGrid = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, xl: 5 }} gap={6}>
      {folders.map((folderName) => (
        <FolderCard key={folderName} folderName={folderName} />
      ))}
    </SimpleGrid>
  );
};

export default FolderGrid;
