import React from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { debounce } from "lodash";

export default function SearchBar({ getUserSearchText }) {
  const handleChange = debounce((e) => getUserSearchText(e.target.value), 350);
  return (
    <>
      <InputGroup
        bg={useColorModeValue("white", "black")}
        maxW="50%"
        mx="auto"
        boxShadow="2xl"
        rounded="lg"
      >
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" onChange={handleChange} />
      </InputGroup>
    </>
  );
}
