"use client";

import * as Toggle from "@radix-ui/react-toggle";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export function ToggleSeen({
  className,
  ...props
}: React.ComponentProps<typeof Toggle.Root>) {
  return (
    <Toggle.Root
      data-slot="toggle"
      aria-label="Toggle Seen"
      className={cn(
        "data-[state=on]:bg-green-550 data-[state=on]:shadow-toggle-seen-on data-[state=on]:border-green-550 shadow-toggle-seen-off focus-visible:border-ring focus-visible:ring-ring/50 data-[state=on] data-[state=on]:focus-visible:ring-green-550/50 inline-flex size-[34px] items-center justify-center gap-2 whitespace-nowrap rounded-full border border-blue-500 bg-white text-sm text-blue-500 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] data-[state=on]:text-white [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        { className },
      )}
      {...props}
    >
      {props.pressed ? <EyeIcon /> : <EyeSlashIcon />}
    </Toggle.Root>
  );
}
