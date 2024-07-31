import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SlMagnifier } from "react-icons/sl";

const SearchBar = () => {
  return (
    <Box flex={1}>
      <InputGroup>
        <InputLeftElement>
          <SlMagnifier />
        </InputLeftElement>
        <Input
          borderRadius={10}
          borderColor={"#ccc"}
          variant="filled"
          placeholder={"WIP"}
          htmlSize={70}
          width="auto"
          _focusVisible={{
            outline: "none",
            borderColor: "#000",
          }}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
