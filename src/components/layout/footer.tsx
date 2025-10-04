export function Footer() {
  return (
    <footer className="relative flex w-full items-center justify-center bg-slate-50 px-3 py-2 pt-6 text-slate-500 md:px-7">
      <p className="my-4 text-center text-xs font-medium leading-none">
        Technical Challenge for Nilo ・ Made by{" "}
        <a
          href="https://mauricarron.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carron Mauricio
        </a>
      </p>
      {/* Border decoration */}
      <div className="absolute inset-x-0 top-0 h-4 rounded-b-full bg-gradient-to-r from-slate-200 to-white shadow-[inset_0px_-4px_4px_0px_#0F172A0D]" />
    </footer>
  );
}
