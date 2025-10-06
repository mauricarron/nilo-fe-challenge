import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMON, GET_FUZZY_POKEMON } from "@/lib/api/queries";
import type { Query } from "@favware/graphql-pokemon";

export const INITIAL_OFFSET = 94; // skip all CAP Pokémon, PokéStar Pokémon, Missingno, and 'M (00)
const TAKE = 15;

export function usePokemon(query: string = "") {
  const hasQuery = query.trim().length > 0;

  const {
    data: allPokemonData,
    loading: loadingAllPokemon,
    error: errorAllPokemon,
    fetchMore: fetchMorePokemon,
  } = useQuery<Query>(GET_ALL_POKEMON, {
    variables: {
      offset: INITIAL_OFFSET,
      take: TAKE,
    },
    skip: hasQuery,
  });

  const {
    data: fuzzyPokemonData,
    loading: loadingFuzzyPokemon,
    error: errorFuzzyPokemon,
    fetchMore: fetchMoreFuzzyPokemon,
  } = useQuery<Query>(GET_FUZZY_POKEMON, {
    variables: {
      take: TAKE,
      pokemon: query,
    },
    skip: !hasQuery,
  });

  return {
    pokemonList:
      fuzzyPokemonData?.getFuzzyPokemon || allPokemonData?.getAllPokemon || [],
    isLoading: loadingAllPokemon || loadingFuzzyPokemon,
    error: errorAllPokemon || errorFuzzyPokemon,
    fetchMore: hasQuery ? fetchMoreFuzzyPokemon : fetchMorePokemon,
  };
}
