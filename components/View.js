import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import {
  SimpleGrid,
  Box,
  Center,
  Heading,
  Flex,
  IconButton,
  Text,
  UnorderedList,
  ListItem,
  Spinner,
  useColorModeValue,
  Img,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import CardDetailsItem from "./CardDetailsItem";

export default function View({ pokemons }) {
  const [index, setIndex] = React.useState(0);

  const currentPokemon = pokemons[index];

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} h="92.5vh" py="1rem">
        <Box>
          <Center h="100%" w="100%" ml="1rem">
            <Tilt>
              <Image
                boxShadow="2xl"
                cursor="pointer"
                rounded={"lg"}
                width={400}
                height={600}
                src={currentPokemon.images.large}
                fallbackSrc="https://via.placeholder.com/150"
                alt={currentPokemon.name}
                priority="true"
              />
            </Tilt>
          </Center>
        </Box>

        <Box p="1rem" m="1rem">
          <Flex alignItems="center" h="100%" w="100%" mr="1rem">
            <Flex flexDir="column" mr="1rem">
              <IconButton
                aria-label="previous currentPokemon"
                icon={<ChevronUpIcon />}
                fontSize="1.5rem"
                onClick={() => index > 0 && setIndex(index - 1)}
                isDisabled={index <= 0}
                mb="1rem"
              />
              <IconButton
                aria-label="next currentPokemon"
                icon={<ChevronDownIcon />}
                fontSize="1.5rem"
                onClick={() => setIndex(index + 1)}
              />
            </Flex>

            <Box
              w="100%"
              h="100%"
              p="1rem"
              boxShadow="2xl"
              bg={useColorModeValue("white", "gray.800")}
              rounded="1rem"
            >
              <Center mt="1rem" display="flex" flexDir="column">
                {currentPokemon.types && (
                  <CardDetailsItem
                    label="Types"
                    content={currentPokemon.types}
                    type="types"
                  />
                )}
                <Heading my="2rem" color={useColorModeValue("black", "white")}>
                  {currentPokemon.name}
                </Heading>
                <CardDetailsItem label="HP" content={currentPokemon.hp} />
                {currentPokemon.attacks && (
                  <CardDetailsItem
                    label="Attacks"
                    content={currentPokemon.attacks}
                    type="attacks"
                  />
                )}
              </Center>
              {/* <CardDetailsItem
                  label="Evolves from"
                  content={currentPokemon.evolvesFrom}
                /> */}
              {/* <CardDetailsItem
                  label="Abilities"
                  content={currentPokemon.abilities}
                  type="array"
                /> */}
              {/* <Text>
                  Attacks:{" "}
                  {currentPokemon.attacks
                    ? currentPokemon.attacks.map((attack, index) => (
                        <UnorderedList key={index}>
                          <ListItem>
                            <Text>Name: {attack.name}</Text>
                            <Text>Damage: {attack.damage}</Text>
                          </ListItem>
                        </UnorderedList>
                      ))
                    : "???"}
                </Text>
                <hr />
                <Text>
                  Weaknesses:{" "}
                  {currentPokemon.weaknesses
                    ? currentPokemon.weaknesses.map((weakness, index) => (
                        <UnorderedList key={index}>
                          <ListItem>
                            <Text>Type: {weakness.type}</Text>
                            <Text>Value: {weakness.value ?? "???"}</Text>
                          </ListItem>
                        </UnorderedList>
                      ))
                    : "???"}
                </Text> */}
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
}
