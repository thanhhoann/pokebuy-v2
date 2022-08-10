import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchBar() {
  return (
    <>
      <InputGroup
        bg={useColorModeValue("white", "black")}
        maxW="50%"
        mx="auto"
        my="4rem"
        boxShadow="2xl"
        rounded="lg"
      >
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Search for your pokemon" />
      </InputGroup>
    </>
  );
}
