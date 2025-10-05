import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="space-y-3">
        <p className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-2xl font-semibold leading-6 text-transparent">
          Pokedex
        </p>
        <p className="text-xs font-medium leading-none">Gotta catch ‘em all!</p>
      </div>
    </Link>
  );
}
