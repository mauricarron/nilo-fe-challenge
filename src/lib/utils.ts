import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { pokemonTypeColor } from "./mappers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Gets the Tailwind CSS class name for a Pokemon type's background color.
 *
 * @param type - The Pokemon type name (e.g., "Fire", "Water", "Grass"), case-sensitive
 * @returns The corresponding Tailwind CSS background color class, or fallback color if type not found
 *
 * @example
 * ```typescript
 * getPokemonTypeColor("Fire") // returns "bg-orange-500"
 * getPokemonTypeColor("unknown") // returns fallback color
 * ```
 */
export function getPokemonTypeColor(type: string): string {
  return pokemonTypeColor[type] || pokemonTypeColor["Fallback"];
}
