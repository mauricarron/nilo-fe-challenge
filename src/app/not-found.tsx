import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full grow flex-col items-center justify-center text-gray-500">
      <h2 className="font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="mt-5 flex flex-nowrap items-center justify-center gap-2 text-sm font-semibold text-blue-500 hover:underline"
      >
        <ArrowLeftIcon className="inline-block size-6" />
        <span>Back to Homepage</span>
      </Link>
    </div>
  );
}
