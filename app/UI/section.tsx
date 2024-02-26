import React from "react";
import { inknut_antiqua } from "./font";

interface SectionProps {
  children?: React.ReactNode;
  id: string;
  title?: string;
  className?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  titleChildren?: React.ReactNode;
}

export default function Section({
  children,
  id,
  title,
  icon,
  className,
  style,
  titleStyle,
  titleChildren,
}: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{ marginTop: "2.4rem", ...style }}
    >
      {title && (
        <a className={inknut_antiqua.className} href={`#${id}`}>
          {icon}
          <h5
            style={{
              fontSize: "2rem",
              fontWeight: 300,
              color: "#2a2a2a",
              position: "relative",
              display: "inline",
              marginLeft: "0.6rem",
              top: "-0.8rem",
              textTransform: "capitalize",
              ...titleStyle,
            }}
          >
            {title}
          </h5>
          {titleChildren}
        </a>
      )}
      {children}
    </section>
  );
}
