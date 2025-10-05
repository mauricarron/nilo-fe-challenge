"use client";

import { Button } from "@/components/ui/button";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export function EmptySeenPokemon() {
  const { push } = useRouter();
  return (
    <div className="shadow-pokemon-card flex w-full flex-col items-center gap-5 rounded-xl bg-white p-5">
      <EyeSlashIcon className="size-14 text-blue-500" />
      <h1 className="text-center font-bold">No Pokémon Seen Yet</h1>
      <p className="max-w-prose text-pretty text-center text-sm">
        You haven’t marked any Pokémon as seen yet. Start exploring and click
        the eye icon on Pokémon cards to track your discoveries!
      </p>

      <Button onClick={() => push("/")}>Explore Pokémon</Button>
    </div>
  );
}
