import { useEffect, useRef, useState, type ReactNode, type ElementType, type CSSProperties } from "react";

type Variant = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}

export function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const variantClass =
    variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : variant === "scale" ? "reveal-scale" : "";

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Tag>
  );
}