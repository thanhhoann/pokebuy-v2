import { Box, useColorModeValue } from "@chakra-ui/react";
export default function Layout({ children }) {
  return (
    <>
      <Box
        bgGradient={useColorModeValue(
          "radial(black 1px, transparent 1px)",
          "radial(white 1px, transparent 1px)"
        )}
        backgroundSize="20px 20px"
        height="100%"
        w="100%"
      >
        {children}
      </Box>
    </>
  );
}
