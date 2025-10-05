import { Pokemon } from "@favware/graphql-pokemon";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SeenPokemonStore {
  seenPokemon: Pokemon[];
  toggleSeenPokemon: (pokemon: Pokemon) => void;
  isSeenPokemon: (pokemonKey: string) => boolean;
  clearSeenPokemon: () => void;
}

export const useSeenPokemonStore = create<SeenPokemonStore>()(
  persist(
    (set, get) => ({
      seenPokemon: [],
      toggleSeenPokemon: (pokemon) =>
        set((state) => {
          const isAlreadySeen = state.seenPokemon.some(
            (p) => p.key === pokemon.key,
          );

          if (isAlreadySeen) {
            return {
              seenPokemon: state.seenPokemon.filter(
                (p) => p.key !== pokemon.key,
              ),
            };
          } else {
            return {
              seenPokemon: [...state.seenPokemon, pokemon],
            };
          }
        }),
      isSeenPokemon: (pokemonKey) =>
        get().seenPokemon.some((p) => p.key === pokemonKey),
      clearSeenPokemon: () => set({ seenPokemon: [] }),
    }),
    {
      name: "seen-pokemon",
    },
  ),
);
