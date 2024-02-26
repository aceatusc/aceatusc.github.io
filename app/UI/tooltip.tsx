import styles from "@/styles/tooltip.module.css";
import React from "react";
import { alegreya } from "./font";

export default function Tooltip({
  children,
  title,
  className,
  style,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={`${styles.tooltip} ${className} ${alegreya.className}`}
      data-tip={title}
      style={style}
    >
      {children}
    </span>
  );
}
