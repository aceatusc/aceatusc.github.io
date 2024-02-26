interface GridProps {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  col?: number;
}

export default function Grid({
  children,
  className,
  gap = "1.2rem",
}: GridProps) {
  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(17.2rem, 1fr))`,
    display: "grid",
    gap: gap,
  };

  return (
    <div style={gridStyle} className={className}>
      {children}
    </div>
  );
}
