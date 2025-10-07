import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMON, GET_FUZZY_POKEMON } from "@/lib/api/queries";
import type { Query } from "@favware/graphql-pokemon";

export const INITIAL_OFFSET = 94; // skip all CAP Pokémon, PokéStar Pokémon, Missingno, and 'M (00)
const TAKE = 10;

/**
 * A React hook that fetches Pokemon data with support for both general listing and fuzzy search.
 * Automatically switches between getAllPokemon and getFuzzyPokemon queries based on search input.
 *
 * @param query - Optional search query string. When empty, returns all Pokemon; when provided, performs fuzzy search
 * @returns Object containing pokemonList, loading state, error state, refetch function, and fetchMore function
 */
export function usePokemon(query: string = "") {
  const hasQuery = query.trim().length > 0;

  const {
    data: allPokemonData,
    loading: loadingAllPokemon,
    error: errorAllPokemon,
    refetch: refetchAllPokemon,
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
    refetch: refetchFuzzyPokemon,
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
    hasError: Boolean(errorAllPokemon || errorFuzzyPokemon),
    refetch: hasQuery ? refetchFuzzyPokemon : refetchAllPokemon,
    fetchMore: hasQuery ? fetchMoreFuzzyPokemon : fetchMorePokemon,
  };
}
