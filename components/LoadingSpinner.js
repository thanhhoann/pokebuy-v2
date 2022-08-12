import { Center, Spinner, Heading, useColorModeValue } from "@chakra-ui/react";
export default function LoadingSpinner() {
  return (
    <>
      <Center h="92.5vh" w="100%">
        <Spinner
          thickness="1rem"
          speed="0.3s"
          color={useColorModeValue("black", "white")}
          size="xl"
        />
        <Heading ml="1rem">Loading your pokemons...</Heading>
      </Center>
    </>
  );
}
