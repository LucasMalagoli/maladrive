import { Grid, GridItem, Show } from "@chakra-ui/react";
import MainContainer from "./components/MainContainer/MainContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `
        "header"
        "main"
        `,
        lg: `
    "header header"
    "sidebar main"
    `,
      }}
      gridTemplateRows={{ base: "70px 1fr", lg: "100px 1fr" }}
      gridTemplateColumns={{ base: "1fr", lg: "130px 1fr" }}
      h={"100vh"}
      w={"100vw"}
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem area={"sidebar"}>
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"white"}>
        <MainContainer />
      </GridItem>
    </Grid>
  );
}

/**
 * TODO: talvez um footer?
 * TODO: Sidebar ser scrolável e se ela estiver escondida, dar o espaço pro MainContainer
 */

export default App;
