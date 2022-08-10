import React from "react";
import {
  ChakraProvider,
  extendTheme,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Layout from "../components/Layout";
import HeaderBar from "../components/HeaderBar";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import View from "../components/View";

const url = "https://api.pokemontcg.io/v2/cards/";
const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default function App({ fetchedData }) {
  const [pokemons, setPokemons] = React.useState();
  React.useEffect(() => {
    setPokemons(fetchedData.data);
  });
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <HeaderBar />
          {/* <SearchBar /> */}
          {/* <Cards pokemons={pokemons} /> */}
          <View pokemons={pokemons} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export async function getStaticProps() {
  const fetchedData = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": "5e409ca9-6869-4ec8-8683-939d6153a9c7",
    },
  })
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: { fetchedData },
  };
}
