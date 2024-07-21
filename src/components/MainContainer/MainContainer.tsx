import { Box } from "@chakra-ui/react";
import MainContainerHeader from "./MainContainerHeader";
import MainGrid from "./MainGrid";

const MainContainer = () => {
  const folders = [
    "Fotos",
    "Documentos",
    "Piadas",
    "Material de Estudo",
    "Pasta 5",
    "Pasta 6",
  ];

  return (
    <Box boxSizing={"border-box"} margin={5} overflow={"hidden"}>
      <MainContainerHeader />
      <MainGrid folders={folders} />
    </Box>
  );
};

/**
 * TODO: Layout, cards, filtros e ordenadores
 * TODO: Renderizar a quantidade de items dinamicamente
 *
 * Vai receber o nome das pastas  para fazer um map e
 * renderizar a quantidade necessária
 *
 * Separar em duas partes, primeiros as pastas depois
 * arquivos soltos
 */

export default MainContainer;
