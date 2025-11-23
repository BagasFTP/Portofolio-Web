// src/components/ProjectCard.jsx
import React from "react";
import { Icon } from "@iconify/react";

export default function ProjectCard({ project, onOpen }) {
  if (!project) return null;

  const {
    title,
    description,
    previewImages = [],
    stack = [],
  } = project;

  const preview = previewImages[0];
  const handleOpen = () => onOpen && onOpen(project);

  return (
    <article
      className="
        group flex flex-col h-full overflow-hidden rounded-2xl
        border border-white/40
        bg-white/70 backdrop-blur-xl
        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        transition-all duration-500

        hover:-translate-y-[6px]
        hover:scale-[1.015]
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.14)]
        hover:ring-1 hover:ring-white/60
        hover:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.6)_0%,_rgba(245,245,250,0.78)_30%,_rgba(240,240,255,0.95)_100%)]
      "
    >
      {/* IMAGE PREVIEW + OVERLAY HOVER */}
      {preview && (
        <div
          className="
            relative h-56 md:h-64 overflow-hidden
            bg-slate-100 cursor-pointer
          "
          onClick={handleOpen}
        >
          <img
            src={preview}
            alt={title}
            className="
              h-full w-full object-cover
              transition-all duration-500
              group-hover:scale-[1.05]
              group-hover:brightness-90
            "
          />

          {/* Dark gradient overlay + center button */}
          <div
            className="
              absolute inset-0 flex items-center justify-center
              bg-gradient-to-b from-black/10 via-black/25 to-black/40
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
          >
            <button
              type="button"
              onClick={handleOpen}
              className="
                pointer-events-auto
                inline-flex items-center gap-2
                rounded-full bg-neutral-900/85
                px-5 py-2 text-sm md:text-[0.9rem]
                font-semibold text-white
                shadow-lg shadow-black/40
                transition-all duration-200
                hover:bg-neutral-800 hover:-translate-y-[2px]
              "
            >
              <span>View Details</span>
              <Icon icon="mdi:arrow-right" className="text-lg" />
            </button>
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className="flex flex-col h-full px-6 pt-5 pb-6">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 leading-snug">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="mt-2 text-sm md:text-[0.9rem] text-neutral-600 leading-relaxed">
            {description}
          </p>
        )}

        {/* TECH STACK PILLS */}
        {stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((item, idx) => (
              <span
                key={idx}
                className="
                  inline-flex items-center rounded-full
                  border border-violet-100/70
                  bg-white/80
                  px-3 py-1 text-[0.72rem] md:text-[0.78rem]
                  font-medium text-violet-700

                  shadow-[0_0_0_1px_rgba(148,163,253,0.18)]
                  transition-all duration-300

                  hover:-translate-y-[1px]
                  hover:border-violet-200
                  hover:shadow-[0_6px_18px_rgba(148,163,253,0.35)]
                  hover:bg-[radial-gradient(circle_at_top_left,_rgba(243,244,255,0.95),_rgba(255,255,255,0.98))]
                "
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* BOTTOM CTA – stick to bottom */}
        <div className="mt-auto pt-6 flex justify-end">
          <button
            type="button"
            onClick={handleOpen}
            className="
              inline-flex items-center gap-2 rounded-full
              bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
              px-6 py-2 text-[0.78rem] md:text-sm font-semibold text-white
              shadow-md shadow-purple-400/40
              transition-all duration-200
              hover:shadow-lg hover:shadow-purple-400/60
              hover:translate-y-[1px] active:translate-y-[2px]
            "
          >
            <span>View Details</span>
            <Icon icon="mdi:arrow-right" className="text-lg" />
          </button>
        </div>
      </div>
    </article>
  );
}
