import styles from "@/styles/select.module.css";
import { alegreya } from "./font";

export default function Select({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLProps<HTMLSelectElement>) {
  return (
    <select
      className={`${alegreya.className} ${styles.select_menu} ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
