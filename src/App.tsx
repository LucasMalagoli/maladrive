import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

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
      gridTemplateColumns={{ base: "1fr", lg: "150px 1fr" }}
      h={"100vh"}
      w={"100vw"}
    >
      <GridItem area={"header"} bg={"dodgerblue"}>
        Header
      </GridItem>
      <Show above="lg">
        <GridItem area={"sidebar"} bg={"tomato"}>
          Sidebar
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"pink.300"}>
        MainContainer
      </GridItem>
    </Grid>
  );
}

/**
 * TODO: Grid layout
 * TODO: talvez um footer?
 * TODO: Sidebar ser scrolável e se ela estiver escondida, dar o espaço pro MainContainer
 */

export default App;
