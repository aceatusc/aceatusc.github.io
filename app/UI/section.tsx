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
        <a
          style={{
            display: "flex",
            alignItems: "center",
          }}
          className={inknut_antiqua.className}
          href={`#${id}`}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              position: "relative",
            }}
          >
            {icon}
          </div>
          <h5
            style={{
              fontSize: "2rem",
              fontWeight: 300,
              color: "#2a2a2a",
              display: "block",
              marginLeft: "0.6rem",
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
