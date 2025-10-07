import { Pokemon } from "@favware/graphql-pokemon";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SeenPokemonStore {
  seenPokemon: Pokemon[];
  toggleSeenPokemon: (pokemon: Pokemon) => void;
  isSeenPokemon: (pokemonKey: string) => boolean;
  clearSeenPokemon: () => void;
}

/**
 * A Zustand store that manages the user's seen Pokemon list with persistence.
 * Stores Pokemon that the user has marked as "seen" and provides functions to toggle, check, and clear the list.
 *
 * @returns Store object containing seenPokemon array and management functions (toggleSeenPokemon, isSeenPokemon, clearSeenPokemon)
 */
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
