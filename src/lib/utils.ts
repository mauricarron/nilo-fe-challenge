import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { pokemonTypeColor } from "./mappers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPokemonTypeColor(type: string): string {
  return pokemonTypeColor[type] || pokemonTypeColor["Fallback"];
}
