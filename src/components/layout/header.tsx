"use client";

import { EyeIcon } from "@heroicons/react/24/outline";
import { Logo } from "../brand/logo";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function Header() {
  const { push } = useRouter();

  return (
    <header className="fixed z-50 flex h-32 w-full items-center justify-between bg-slate-50 px-3 py-2 pb-4 md:px-7">
      <Logo />
      <Button onClick={() => push("/seen")}>
        <EyeIcon /> Seen (3)
      </Button>

      {/* Border decoration */}
      <div className="absolute inset-x-0 bottom-0 h-4 rounded-t-full bg-gradient-to-r from-slate-200 to-white shadow-[inset_0px_4px_4px_0px_#0F172A0D]" />
    </header>
  );
}
