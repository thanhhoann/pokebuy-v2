import { SimpleGrid } from "@chakra-ui/react";
import React from "react";

import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Cards() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/cards/?page=${currentPage}`, {
      method: "GET",
      headers: {
        "X-Api-Key": "5e409ca9-6869-4ec8-8683-939d6153a9c7",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.data.slice(-10));
      });
  }, [currentPage, pokemons]);

  const fetchData = () => {
    console.log("next page");
    // setCurrentPage(currentPage => currentPage + 1);
  };
  return (
    <>
      <InfiniteScroll
        dataLength={100} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        //   refreshFunction={this.refresh}
        //   pullDownToRefresh
        //   pullDownToRefreshThreshold={50}
        //   pullDownToRefreshContent={
        //     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        //   }
        //   releaseToRefreshContent={
        //     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        //   }
      >
        <SimpleGrid minChildWidth="350px" mx="0rem">
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <Card key={index} pokemon={pokemon} />
            ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
}
