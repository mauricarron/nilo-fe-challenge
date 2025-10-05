"use client";

import { Button } from "@/components/ui/button";
import { PokemonCard } from "../pokemon-card";
import { EmptySeenPokemon } from "../empty-seen-pokemon";

export function SeenPokemon() {
  return (
    <div className="flex w-full flex-col items-center gap-5">
      <p className="text-center text-xs text-gray-500">
        Sorted by most recently seen
      </p>

      <Button
        variant="destructive"
        onClick={() => {
          console.log("Clear all seen Pokémon");
        }}
      >
        Clear All Seen Pokémon
      </Button>

      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  );
}
