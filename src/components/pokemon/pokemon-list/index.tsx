import { Pokemon } from "@/types/pokemon";
import { PokemonCard } from "../pokemon-card";
import { PokemonCardSkeleton } from "@/components/layout/pokemon-card-skeleton";
import { ErrorWithRecovery } from "@/components/layout/error-with-recovery";
import { EmptyPokemon } from "../empty-pokemon";

export function PokemonList({
  pokemonList,
  isLoading,
  hasError,
  refetch,
}: {
  pokemonList: readonly Pokemon[];
  isLoading: boolean;
  hasError: boolean;
  refetch: () => void;
}) {
  if (hasError) {
    return (
      <ErrorWithRecovery
        message="An error occurred while fetching Pokémon."
        refetch={refetch}
      />
    );
  }

  if (isLoading) {
    return (
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {new Array(15).fill(0).map((_, index) => (
          <PokemonCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (pokemonList.length === 0) {
    return <EmptyPokemon />;
  }

  return (
    <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.key} pokemon={pokemon} />
      ))}
    </div>
  );
}
