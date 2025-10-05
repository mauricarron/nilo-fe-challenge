import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMON } from "@/lib/api/queries";
import type { Query } from "@favware/graphql-pokemon";

export function useGetAllPokemon() {
  const { data, loading, error } = useQuery<Query>(GET_ALL_POKEMON, {
    variables: {
      offset: 94, // skip all CAP Pokémon, PokéStar Pokémon, Missingno, and 'M (00)
      take: 20,
    },
  });

  return {
    allPokemon: data?.getAllPokemon || [],
    loading,
    error,
  };
}
