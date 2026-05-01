"use client";
import { useEffect, useRef, useState } from "react";
import s from "../../styles/hidescroll.module.css";
import { getScrollbarWidth, scrollbarWidth } from "./scrollbar";

type Props = {
  children: React.ReactNode;
  className?: string;
  paddingX?: number;
  paddingY?: number;
  scrollRef?: React.RefObject<HTMLDivElement>;
};

export default function HideScroll({
  children,
  className,
  paddingX,
  paddingY,
  scrollRef,
  ...props
}: Props) {
  const [sbWidth, setSbWidth] = useState<number>(0);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSbWidth(
      scrollbarWidth === undefined ? getScrollbarWidth() : scrollbarWidth
    );
  }, []);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const check = () => {
      setAtTop(el.scrollTop <= 2);
      setAtBottom(el.scrollHeight - el.scrollTop <= el.clientHeight + 2);
    };
    check();
    el.addEventListener("scroll", check);
    return () => el.removeEventListener("scroll", check);
  }, []);

  return (
    <div className={`${s.parent} ${className || s.parent_default}`}>
      <div
        className={s.child}
        ref={(node) => {
          (innerRef as React.MutableRefObject<HTMLDivElement | null>).current =
            node;
          if (scrollRef)
            (
              scrollRef as React.MutableRefObject<HTMLDivElement | null>
            ).current = node;
        }}
        style={{
          top: `${paddingY || 0}px`,
          bottom: `${paddingY || 0}px`,
          right: `-${sbWidth}px`,
        }}
      >
        <div
          {...props}
          style={{
            paddingLeft: `${paddingX || 0}px`,
            paddingRight: `${paddingX || 0}px`,
            overflowY: "auto",
            height: "fit-content",
          }}
        >
          {children}
        </div>
      </div>
      <div className={`${s.fade_top} ${atTop ? s.fade_hidden : ""}`} />
      <div className={`${s.fade_bottom} ${atBottom ? s.fade_hidden : ""}`} />
    </div>
  );
}
