// src/components/ProjectDetailModal.jsx
import React from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const {
    title,
    description,
    previewImages = [],
    stack = [],
    details = {},
  } = project;

  const {
    summary,
    goals = [],
    keyFeatures = [],
    techHighlights = [],
    roles = [],
    longDescription,
    code,
    demo,
  } = details;

  const fallbackImages = [
    "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
  ];
  const imagesToShow = previewImages.length ? previewImages : fallbackImages;
  const techStack = stack;

  const content = (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 backdrop-blur-md
        px-4 py-8
      "
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-5xl max-h-[90vh] overflow-y-auto
          rounded-3xl bg-[#050816]
          text-slate-50
          shadow-[0_24px_80px_rgba(15,23,42,0.75)]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 z-10
            h-9 w-9 flex items-center justify-center
            rounded-full bg-white/10 text-slate-200
            hover:bg-white/20 transition
          "
        >
          <Icon icon="mdi:close" className="text-xl" />
        </button>

        <div className="p-5 sm:p-7 md:p-8 space-y-6">
          {/* PREVIEW IMAGES */}
<div div className="grid gap-4 md:grid-cols-[2fr,1fr]">
  {/* Main large preview */}
  <div className="bg-slate-900/80 rounded-2xl p-3 md:p-4 overflow-hidden">
    <img
      src={imagesToShow[0]}
      alt={title}
      className="
        w-full h-52 sm:h-64 md:h-72 object-cover rounded-xl
        transition-all duration-300
        hover:scale-105 hover:brightness-90
      "
    />
  </div>

  {/* Small previews */}
  <div className="grid grid-cols-3 gap-3">
    {imagesToShow.slice(1, 4).map((src, idx) => (
      <div
        key={idx}
        className="bg-slate-900/80 rounded-xl overflow-hidden"
      >
        <img
          src={src}
          alt={`${title} preview ${idx + 2}`}
          className="
            w-full h-20 sm:h-24 md:h-24 object-cover
            transition-all duration-300
            hover:scale-105 hover:brightness-90
          "
        />
      </div>
    ))}
  </div>
</div>

          {/* TITLE + SHORT DESCRIPTION */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              {title}
            </h2>
            <p className="text-sm md:text-[15px] text-slate-300">
              {description}
            </p>
            {summary && (
              <p className="text-sm md:text-[15px] text-slate-400">
                {summary}
              </p>
            )}
          </div>

          {/* GRID: GOALS + KEY FEATURES */}
          <div className="grid gap-5 md:grid-cols-2">
            {goals.length > 0 && (
              <div
                className="
                  bg-slate-900/60 rounded-2xl p-4 md:p-5 space-y-3
                  border border-slate-800/60
                  transition-all duration-300
                  hover:bg-slate-900/90
                  hover:-translate-y-1
                  hover:border-sky-400/70
                  hover:shadow-[0_18px_50px_rgba(56,189,248,0.35)]
                "
              >
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <Icon icon="mdi:target-variant" className="text-lg" />
                  Project Goals
                </div>
                <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-slate-300">
                  {goals.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>
            )}

            {keyFeatures.length > 0 && (
              <div
                className="
                  bg-slate-900/60 rounded-2xl p-4 md:p-5 space-y-3
                  border border-slate-800/60
                  transition-all duration-300
                  hover:bg-slate-900/90
                  hover:-translate-y-1
                  hover:border-pink-500/70
                  hover:shadow-[0_18px_50px_rgba(236,72,153,0.35)]
                "
              >
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <Icon icon="mdi:star-circle-outline" className="text-lg" />
                  Key Features / Results
                </div>
                <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-slate-300">
                  {keyFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* TECH HIGHLIGHTS + MY ROLE */}
          <div className="grid gap-5 md:grid-cols-2">
            <div
              className="
                bg-slate-900/60 rounded-2xl p-4 md:p-5
                space-y-3
                border border-slate-800/60
                transition-all duration-300
                hover:bg-slate-900/90
                hover:-translate-y-1
                hover:border-indigo-400/70
                hover:shadow-[0_18px_50px_rgba(129,140,248,0.35)]
              "
            >
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                <Icon
                  icon="mdi:lightning-bolt-outline"
                  className="text-lg"
                />
                Tech Stack & Highlights
              </div>

              {techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {techStack.map((t, i) => (
                    <span
                      key={i}
                      className="
                        inline-flex items-center
                        px-3 py-1.5 text-[12px] md:text-xs font-medium
                        rounded-full bg-slate-900/80
                        border border-slate-700
                        transition-all duration-200
                        hover:-translate-y-0.5
                        hover:border-sky-400/80
                        hover:bg-slate-900
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {techHighlights.length > 0 && (
                <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-slate-300 mt-2">
                  {techHighlights.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              )}
            </div>

            {roles.length > 0 && (
              <div
                className="
                  bg-slate-900/60 rounded-2xl p-4 md:p-5
                  space-y-3
                  border border-slate-800/60
                  transition-all duration-300
                  hover:bg-slate-900/90
                  hover:-translate-y-1
                  hover:border-pink-500/70
                  hover:shadow-[0_18px_50px_rgba(236,72,153,0.35)]
                "
              >
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <Icon
                    icon="mdi:account-badge-outline"
                    className="text-lg"
                  />
                  My Role
                </div>
                <div className="flex flex-wrap gap-2">
                  {roles.map((r, i) => (
                    <span
                      key={i}
                      className="
                        inline-flex items-center
                        px-3 py-1.5 text-[12px] md:text-xs font-medium
                        rounded-full bg-pink-500/10 text-pink-200
                        border border-pink-400/40
                        transition-all duration-200
                        hover:-translate-y-0.5
                        hover:shadow-[0_0_25px_rgba(236,72,153,0.55)]
                      "
                    >
                      {r}
                    </span>
                  ))}
                </div>
                {longDescription && (
                  <p className="text-sm text-slate-300 mt-1 whitespace-pre-line">
                    {longDescription}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* BUTTONS VIEW CODE / LIVE DEMO */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
            {(code || demo) && (
              <>
                {code && (
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center gap-2 px-4 py-2
                      rounded-full text-sm font-semibold
                      bg-slate-900 text-slate-100
                      border border-slate-700
                      hover:bg-slate-800 hover:border-sky-400/70
                      hover:-translate-y-0.5
                      hover:shadow-[0_12px_35px_rgba(56,189,248,0.3)]
                      transition-all duration-300
                    "
                  >
                    <Icon icon="mdi:code-tags" />
                    View Code
                  </a>
                )}

                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center gap-2 px-5 py-2
                      rounded-full text-sm font-semibold
                      bg-gradient-to-r from-purple-500 to-pink-500
                      text-white shadow-lg shadow-purple-500/40
                      hover:shadow-purple-500/70
                      hover:-translate-y-0.5
                      transition-all duration-300
                    "
                  >
                    <Icon icon="mdi:rocket-launch-outline" />
                    Live Demo
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
