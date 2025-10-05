"use client";

import { EmptySeenPokemon } from "@/components/pokemon-list/empty-seen-pokemon";
import { SeenPokemon } from "@/components/pokemon-list/seen-pokemon";
import { useSeenPokemonStore } from "@/stores/seen-pokemon-store";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SeenPage() {
  const { seenPokemon } = useSeenPokemonStore();

  return (
    <main className="mt-32 flex w-full max-w-7xl grow flex-col items-center gap-5 p-3">
      {seenPokemon.length === 0 ? (
        <EmptySeenPokemon />
      ) : (
        <>
          <div className="space-y-5 text-center">
            <Link
              href="/"
              className="flex flex-nowrap items-center justify-center gap-2 text-sm font-semibold text-blue-500 hover:underline"
            >
              <ArrowLeftIcon className="inline-block size-6" />
              <span>Back to All Pokémon</span>
            </Link>
            <h1 className="text-balance text-2xl font-bold leading-normal">
              Your Seen Pokémon
            </h1>
            <h2 className="md:text-md text-pretty text-sm font-normal">
              You´ve discovered {seenPokemon.length} Pokémon so far! Keep
              exploring to catch ‘em all.
            </h2>
          </div>

          <SeenPokemon seenPokemon={seenPokemon} />
        </>
      )}
    </main>
  );
}
