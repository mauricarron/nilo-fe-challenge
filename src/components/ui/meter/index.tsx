import { cn } from "@/lib/utils";
import styles from "./meter.module.css";

export function Meter({ className, ...props }: React.ComponentProps<"meter">) {
  return <meter className={cn(styles.meter, className)} {...props} />;
}
