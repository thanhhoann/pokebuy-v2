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
import LoadingSpinner from "../components/LoadingSpinner";

const url = "https://api.pokemontcg.io/v2/cards";
const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default function App({ fetchedData }) {
  const [pokemons, setPokemons] = React.useState(fetchedData.data);
  const [searchText, setSearchText] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (searchText.length > 0) {
      setIsLoading(true);
      fetch(url + `?q=name:${searchText}`, {
        method: "GET",
        headers: {
          "X-Api-Key": "5e409ca9-6869-4ec8-8683-939d6153a9c7",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data.length != 0) {
            console.log(data.data);
            setPokemons(data.data);
          }
        });
      setIsLoading(false);
    } else {
      setIsLoading(true);
      fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": "5e409ca9-6869-4ec8-8683-939d6153a9c7",
        },
      })
        .then((res) => res.json())
        .then((data) => setPokemons(data.data));
      setIsLoading(false);
    }
  }, [searchText]);

  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <HeaderBar>
            <SearchBar getUserSearchText={setSearchText} />
          </HeaderBar>
          {/* <SearchBar /> */}
          {/* <Cards pokemons={pokemons} /> */}
          {isLoading ? <LoadingSpinner /> : <View pokemons={pokemons} />}
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
