import { cn } from "@/lib/utils";

export function PokedexNumberBadge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pokedex-number-badge"
      className={cn(
        "font-stick-no-bills focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-lg border border-transparent bg-gray-100 px-2 py-1 text-center text-sm font-bold tabular-nums leading-6 text-gray-500 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3 [a&]:hover:bg-gray-100/90",
        className,
      )}
      {...props}
    />
  );
}
