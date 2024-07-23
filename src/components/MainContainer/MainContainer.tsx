import { Box } from "@chakra-ui/react";
import MainGrid from "./MainGrid/MainGrid";

const MainContainer = () => {
  return (
    <Box boxSizing={"border-box"} margin={5} overflow={"hidden"}>
      <MainGrid />
    </Box>
  );
};

/**
 * TODO: card de arquivo, filtros e ordenadores
 * TODO: passar o nome das pastas para um arquivo de data.ts
 *
 * Separar em duas partes, primeiros as pastas depois
 * arquivos soltos
 */

export default MainContainer;
