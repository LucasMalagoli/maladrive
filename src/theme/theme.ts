import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      bg: "#f8fafd",
      color: "gray.800",
    },
  },
};

const theme = extendTheme({ config, styles });

export default theme;
