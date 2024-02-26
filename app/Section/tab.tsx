"use client";

import styles from "@/styles/tab.module.css";
import Image from "next/image";
import React from "react";

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  active?: boolean;
}

export function Tab({ children, className, active, ...props }: TabProps) {
  return (
    <button
      className={`${styles.tab} ${className || ""} ${
        active ? styles.tab_active : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

type TabElement = React.ReactElement<TabProps>;

interface TabsProps {
  value: string;
  onChange: (value: string) => void;
  children: TabElement | TabElement[];
}

export function Tabs({ value, onChange, children }: TabsProps) {
  const [leftStart, setLeftStart] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const handleScroll = (direction: "left" | "right") => {
    if (direction == "right") {
      setLeftStart((prev) =>
        Math.max(
          prev - 100,
          containerRef.current?.offsetWidth! -
            containerRef.current?.scrollWidth!
        )
      );
    }
    if (direction == "left" && leftStart < 0) {
      setLeftStart((prev) => Math.min(prev + 100, 0));
    }
  };
  return (
    <div className={styles.tabs_container}>
      <button
        className={styles.tabs_control__button}
        onClick={() => handleScroll("left")}
      >
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={10}
          height={10}
          style={{ transform: "rotateZ(180deg)" }}
        />
      </button>
      <div
        className={styles.tab_item__container}
        ref={containerRef}
        style={{
          left: `${leftStart}px`,
        }}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              onClick: () => onChange(child.props.value),
              active: child.props.value === value,
            });
          }
          return child;
        })}
      </div>
      <button
        className={styles.tabs_control__button}
        onClick={() => handleScroll("right")}
      >
        <Image src="/arrow.svg" alt="arrow" width={10} height={10} />
      </button>
    </div>
  );
}
