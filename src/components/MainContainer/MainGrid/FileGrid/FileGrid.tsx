import { SimpleGrid } from "@chakra-ui/react";
import FileGridHeader from "./FileGridHeader/FileGridHeader";
import { files } from "../../../../data/files";
import FileCard from "./FileCard/FileCard";

const FileGrid = () => {
  return (
    <>
      <FileGridHeader />
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, xl: 5 }} gap={6}>
        {files.map((file) => (
          <FileCard file={file} key={file.name} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default FileGrid;
