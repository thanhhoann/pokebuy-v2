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

  const spinnerColor = useColorModeValue("black", "white");

  return (
    <>
      {pokemons ? (
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
                  src={pokemons[index].images.large}
                  fallbackSrc="https://via.placeholder.com/150"
                  alt={pokemons[index].name}
                  priority="true"
                />
              </Tilt>
            </Center>
          </Box>

          <Box p="1rem" m="1rem" color="white">
            <Flex alignItems="center" h="100%" w="100%" mr="1rem">
              <Flex flexDir="column" mr="1rem">
                <IconButton
                  aria-label="previous pokemons[index]"
                  icon={<ChevronUpIcon />}
                  fontSize="1.5rem"
                  onClick={() => index > 0 && setIndex(index - 1)}
                  isDisabled={index <= 0}
                  mb="1rem"
                />
                <IconButton
                  aria-label="next pokemons[index]"
                  icon={<ChevronDownIcon />}
                  fontSize="1.5rem"
                  onClick={() => setIndex(index + 1)}
                />
              </Flex>

              <Box w="100%" h="100%" bg="black" rounded="1rem" p="1rem">
                <Center mt="1rem">
                  <Heading>{pokemons[index].name}</Heading>
                </Center>
                <CardDetailsItem
                  label="Level"
                  content={pokemons[index].level}
                />
                <CardDetailsItem label="HP" content={pokemons[index].hp} />
                <CardDetailsItem
                  label="Evolves from"
                  content={pokemons[index].evolvesFrom}
                />
                <CardDetailsItem
                  label="Types"
                  content={pokemons[index].types}
                  type="array"
                />
                <CardDetailsItem
                  label="Abilities"
                  content={pokemons[index].abilities}
                  type="array"
                />
                <Text>
                  Attacks:{" "}
                  {pokemons[index].attacks
                    ? pokemons[index].attacks.map((attack, index) => (
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
                  {pokemons[index].weaknesses
                    ? pokemons[index].weaknesses.map((weakness, index) => (
                        <UnorderedList key={index}>
                          <ListItem>
                            <Text>Type: {weakness.type}</Text>
                            <Text>Value: {weakness.value ?? "???"}</Text>
                          </ListItem>
                        </UnorderedList>
                      ))
                    : "???"}
                </Text>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
      ) : (
        <Center h="92.5vh" w="100%">
          <Spinner
            thickness="1rem"
            speed="0.3s"
            color={spinnerColor}
            size="xl"
          />
          <Heading ml="1rem">Loading your pokemons...</Heading>
        </Center>
      )}
    </>
  );
}
