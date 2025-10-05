import { PokemonList } from "@/components/pokemon-search/pokemon-list";

export default function Home() {
  return (
    <main className="mt-32 flex w-full max-w-7xl grow flex-col items-center gap-5 p-3">
      <div className="space-y-5 text-center">
        <h1 className="text-balance text-2xl font-bold leading-normal">
          Discover Amazing Pokemon
        </h1>
        <h2 className="md:text-md text-pretty text-sm font-normal">
          Explore the world of Pokémon, discover their unique abilities, and
          build your collection. Mark your favorites as seen to keep track of
          your progress!
        </h2>
      </div>

      <PokemonList />
    </main>
  );
}
