"use client";

import { Button } from "@/components/ui/button";
import { PokemonCard } from "../pokemon-card";
import { useSeenPokemonStore } from "@/stores/seen-pokemon-store";
import { Pokemon } from "@/types/pokemon";

export function SeenPokemon({ seenPokemon }: { seenPokemon: Pokemon[] }) {
  const { clearSeenPokemon } = useSeenPokemonStore();

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <p className="text-center text-xs text-gray-500">
        Sorted by most recently seen
      </p>

      <Button variant="destructive" onClick={() => clearSeenPokemon()}>
        Clear All Seen Pokémon
      </Button>

      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {seenPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.key} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
