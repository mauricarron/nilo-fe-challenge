import * as React from "react";

import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function SearchBar({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform stroke-2 text-gray-400" />
      <input
        type="search"
        className={cn(
          "selection:bg-primary selection:text-primary-foreground h-12 w-full min-w-0 rounded-lg border border-gray-200 bg-white py-1 pl-10 pr-3 text-[11px] leading-none outline-none transition-[color,box-shadow] placeholder:text-gray-400 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-red-550/20 aria-invalid:border-red-550",
          className,
        )}
        {...props}
      />
    </div>
  );
}
