"use client";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export function EmptyPokemon() {
  return (
    <div className="flex w-full grow flex-col items-center gap-5 rounded-xl bg-white p-5 shadow-pokemon-card">
      <ExclamationCircleIcon className="size-14 text-blue-500" />
      <h1 className="text-center font-bold">No Pokémon Found</h1>
      <p className="max-w-prose text-pretty text-center text-sm">
        We couldn’t find any Pokémon matching your search. Try adjusting your
        search terms or explore the full list of Pokémon.
      </p>
    </div>
  );
}
