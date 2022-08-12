import {
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Text,
  Image,
  color,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import heartSVG from "../public/heart.svg";
import attackIcon from "../public/attack.png";
// types
import grassIcon from "../public/type_grass.png";
import fireIcon from "../public/type_fire.png";
import colorlessIcon from "../public/type_colorless.png";
import waterIcon from "../public/type_water.png";
import lightningIcon from "../public/type_lightning.png";
import darknessIcon from "../public/type_darkness.png";
import dragonIcon from "../public/type_dragon.png";
import fairyIcon from "../public/type_fairy.png";
import fightingIcon from "../public/type_fighting.png";
import metalIcon from "../public/type_metal.png";
import psychicIcon from "../public/type_psychic.png";

export default function CardDetailsItem({ label, content, type = "string" }) {
  const textColor = useColorModeValue("black", "white");
  const labelImg = {
    HP: heartSVG,
  };

  const typeImg = {
    Fire: fireIcon,
    Water: waterIcon,
    Grass: grassIcon,
    Colorless: colorlessIcon,
    Lightning: lightningIcon,
    Darkness: darknessIcon,
    Dragon: dragonIcon,
    Fairy: fairyIcon,
    Fighting: fightingIcon,
    Metal: metalIcon,
    Psychic: psychicIcon,
  };

  return (
    <>
      {type === "string" && (
        <>
          <Box display="flex" mb="0.5rem" alignItem="center">
            <Image src={labelImg[label].src} w="30px" h="30px" alt="aoteuhs" />
            <Text ml="0.5rem">{content ?? "???"}</Text>
          </Box>
        </>
      )}
      {type === "types" && (
        <>
          <Flex>
            {content.map((text, index) => (
              <Box key={index} mx="0.2rem" bg="black" p="0.3rem" rounded="100%">
                <Image src={typeImg[text].src} w="30px" h="30px" alt={type} />
              </Box>
            )) ?? "???"}
          </Flex>
        </>
      )}
      {type === "attacks" && (
        <>
          {content.map((item, index) => (
            <>
              <Flex alignItems="center" h="min-content">
                <Text
                  mr="1rem"
                  bg="black"
                  rounded="1rem"
                  px="1rem"
                  py="0.2rem"
                  color="white"
                >
                  {item.name}
                </Text>
                <Flex alignItems="center">
                  <Image src={attackIcon.src} w="15px" h="15px" alt="attack" />
                  <Text ml="0.2rem">{item.damage}</Text>
                </Flex>
                <Flex key={index} alignItems="center" p="1rem">
                  <Flex>
                    {item.cost.map((text, text_index) => (
                      <Box
                        key={text_index}
                        mx="0.2rem"
                        bg="black"
                        p="0.3rem"
                        rounded="100%"
                      >
                        <Image
                          src={typeImg[text].src}
                          w="30px"
                          h="30px"
                          alt={type}
                        />
                      </Box>
                    )) ?? "???"}
                  </Flex>
                </Flex>
              </Flex>
            </>
          ))}
        </>
      )}
    </>
  );
}
