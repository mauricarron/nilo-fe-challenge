"use client";

import { useEffect } from "react";
import { SearchBar } from "@/components/ui/search-bar";
import { useDebounceValue } from "@/hooks/use-debounce";

interface PokemonSearchBarProps {
  onSearchChange: (value: string) => void;
}

export function PokemonSearchBar({ onSearchChange }: PokemonSearchBarProps) {
  const [debouncedValue, setDebouncedValue] = useDebounceValue("");

  useEffect(() => {
    onSearchChange(debouncedValue);
  }, [debouncedValue, onSearchChange]);

  return (
    <SearchBar
      name="pokemon-search"
      id="pokemon-search"
      placeholder="Search for Pokémon by name..."
      onChange={(e) => setDebouncedValue(e.target.value)}
    />
  );
}
