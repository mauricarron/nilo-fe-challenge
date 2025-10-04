import { cn } from "@/lib/utils";

export function PokemonTypeBadge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pokemon-type-badge"
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border border-transparent bg-black px-3 py-1 text-center text-[11px] font-semibold uppercase tabular-nums leading-6 text-white transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3 [a&]:hover:bg-black/90",
        className,
      )}
      {...props}
    />
  );
}
