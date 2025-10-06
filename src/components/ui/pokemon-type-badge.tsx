import { cn } from "@/lib/utils";

export function PokemonTypeBadge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pokemon-type-badge"
      className={cn(
        "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border border-transparent bg-black px-3 py-1 text-center text-[11px] font-semibold uppercase leading-6 text-white",
        className,
      )}
      {...props}
    />
  );
}
