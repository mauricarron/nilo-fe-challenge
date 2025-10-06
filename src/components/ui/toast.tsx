"use client";

import { cn } from "@/lib/utils";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { toast as sonnerToast } from "sonner";

type ToastVariant = "default" | "destructive";

interface ToastProps {
  id: string | number;
  pokemon: string;
  variant?: ToastVariant;
}

interface ToastOptions {
  pokemon: string;
}

function createToast(options: ToastOptions, variant: ToastVariant = "default") {
  return sonnerToast.custom((id) => (
    <Toast id={id} pokemon={options.pokemon} variant={variant} />
  ));
}

function seenToast(options: ToastOptions) {
  return createToast(options, "default");
}

seenToast.add = function (options: ToastOptions) {
  return createToast(options, "default");
};

seenToast.remove = function (options: ToastOptions) {
  return createToast(options, "destructive");
};

export { seenToast };

function Toast(props: ToastProps) {
  const { pokemon, variant = "default" } = props;

  return (
    <div
      className={cn(
        "mx-auto w-full rounded-xl p-3 text-xs shadow-lg ring-1 md:max-w-md",
        {
          "bg-green-600 text-white ring-green-500/5": variant === "default",
          "border-2 border-red-550 bg-white text-red-550 ring-red-550/5":
            variant === "destructive",
        },
      )}
    >
      <div className="flex w-full flex-nowrap items-center gap-1">
        {variant === "default" ? (
          <span className="flex flex-nowrap items-center gap-1">
            <CheckCircleIcon className="size-6" />
            <p>¡Agregaste a </p>
          </span>
        ) : (
          <span className="flex flex-nowrap items-center gap-1">
            <ExclamationCircleIcon className="size-6" />
            <p>¡Quitaste a</p>
          </span>
        )}
        <span className="whitespace-nowrap text-nowrap font-semibold capitalize">
          {pokemon}!
        </span>
      </div>
    </div>
  );
}
