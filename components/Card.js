import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Tilt from "react-parallax-tilt";
import { SearchIcon } from "@chakra-ui/icons";
import CardDetails from "./CardDetails";

export default function Card({ pokemon }) {
  const [isHover, setIsHover] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CardDetails isOpen={isOpen} />
      <Center mb="3rem" display="flex" flexDir="column" maxW="100vw">
        <Tilt>
          <Image
            boxShadow="2xl"
            cursor="pointer"
            rounded={"lg"}
            height={370}
            width="100%"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={onOpen}
            src={pokemon.images.small}
            alt={pokemon.name}
          />
        </Tilt>
      </Center>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{pokemon.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Level: {pokemon.level ?? "???"}</Text>
            <hr />
            <Text>HP: {pokemon.hp ?? "???"}</Text>
            <hr />
            <Text>Evolves from {pokemon.evolvesFrom ?? "???"}</Text>
            <hr />
            <Text>
              Types:{" "}
              {pokemon.types.map((type, index) => (
                <UnorderedList key={index}>
                  <ListItem>{type}</ListItem>
                </UnorderedList>
              )) ?? "???"}
            </Text>
            <hr />
            <Text>
              Abilities:{" "}
              {pokemon.abilities
                ? pokemon.abilities.map((ability, index) => (
                    <UnorderedList key={index}>
                      <ListItem>{ability.name}</ListItem>
                    </UnorderedList>
                  ))
                : "???"}
            </Text>
            <hr />
            <Text>
              Attacks:{" "}
              {pokemon.attacks
                ? pokemon.attacks.map((attack, index) => (
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
              {pokemon.weaknesses
                ? pokemon.weaknesses.map((weakness, index) => (
                    <UnorderedList key={index}>
                      <ListItem>
                        <Text>Type: {weakness.type}</Text>
                        <Text>Value: {weakness.value ?? "???"}</Text>
                      </ListItem>
                    </UnorderedList>
                  ))
                : "???"}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
        <ModalContent>
          <ModalHeader>{pokemon.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
