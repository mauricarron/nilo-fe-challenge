import { Button } from "@/components/ui/button";

export function ErrorWithRecovery({
  message,
  refetch,
}: {
  message: string;
  refetch?: () => void;
}) {
  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center gap-4 rounded-xl">
      <p className="max-w-prose text-pretty text-center text-lg font-medium text-gray-500">
        {message}
      </p>
      {refetch && <Button onClick={refetch}>Try again</Button>}
    </div>
  );
}
