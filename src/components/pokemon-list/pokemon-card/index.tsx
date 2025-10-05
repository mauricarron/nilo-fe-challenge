import { Divider } from "@/components/ui/divider";
import { Label } from "@/components/ui/label";
import { Meter } from "@/components/ui/meter";
import { PokedexNumberBadge } from "@/components/ui/pokedex-number-badge";
import { PokemonTypeBadge } from "@/components/ui/pokemon-type-badge";
import { ToggleSeen } from "@/components/ui/toggle-seen";
import { PokemonType } from "@favware/graphql-pokemon";
import Image from "next/image";

export function PokemonCard({
  name,
  num,
  sprite,
  types,
  baseStats,
}: {
  name: string;
  num: number;
  sprite: string;
  types: readonly PokemonType[];
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
  };
}) {
  const isSeen = true;

  return (
    <div className="shadow-pokemon-card relative flex w-full flex-col items-center gap-5 rounded-xl bg-white p-3 pt-6">
      {isSeen && (
        <span className="absolute inset-x-0 top-0 h-3 rounded-t-xl bg-green-550"></span>
      )}
      <div className="absolute right-3 top-5">
        <ToggleSeen />
      </div>

      <div className="relative size-32">
        <Image
          src={sprite}
          alt={name}
          fill={true}
          sizes="100%"
          className="object-contain"
        />
      </div>

      <PokedexNumberBadge>#{num}</PokedexNumberBadge>

      <p className="text-center font-semibold capitalize">{name}</p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {types.map((type) => (
          <PokemonTypeBadge key={type.name}>{type.name}</PokemonTypeBadge>
        ))}
      </div>

      <div className="w-full space-y-5">
        <BaseStat label="HP" value={baseStats.hp} />
        <BaseStat label="Attack" value={baseStats.attack} />
        <BaseStat label="Defense" value={baseStats.defense} />
      </div>

      <Divider />

      <div className="flex w-full items-baseline justify-between text-xs text-gray-500">
        <Label className="font-semibold">Gen</Label>
        <p className="uppercase">ZU</p>
      </div>
    </div>
  );
}

function BaseStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between text-xs leading-none">
        <Label>{label}</Label>
        <span className="font-semibold">{value}</span>
      </div>
      <Meter value={value} max={255} />
    </div>
  );
}
