import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs font-semibold leading-6 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 shadow-button",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-500/90",
        destructive:
          "border-2 bg-white hover:bg-red-550/5 text-red-550 border-red-550 hover:text-accent-foreground focus-visible:ring-red-500/20",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-6 text-[10px] leading-5 has-[>svg]:px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
