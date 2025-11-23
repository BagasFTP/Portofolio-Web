// src/components/SectionContainer.jsx
import React, { useEffect, useRef, useState } from "react";

export default function SectionContainer({
  id,
  eyebrow,
  title,
  children,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // sekitar 15% keliatan baru animasi jalan
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`
        w-full border-b border-white/40 bg-transparent
        transform-gpu transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-20 md:px-10 md:py-24">
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
            {eyebrow}
          </p>
        )}

        {title && (
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
            {title}
          </h2>
        )}

        {children}
      </div>
    </section>
  );
}
