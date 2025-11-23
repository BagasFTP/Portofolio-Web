// src/sections/Skills.jsx
import { Icon } from "@iconify/react";
import SectionContainer from "../components/SectionContainer";

export default function Skills() {
  const groups = [
    {
      title: "Data Analyst",
      icon: "mdi:chart-line-variant",
      items: ["Python (pandas, numpy)", "SQL (MySQL / PostgreSQL)", "Power BI", "Excel (Pivot, VLOOKUP, Cleaning)"],
    },
    {
      title: "Backend",
      icon: "mdi:server",
      items: ["Laravel", "REST API", "MySQL"],
    },
    {
      title: "Frontend",
      icon: "mdi:monitor-cellphone-star",
      items: ["React", "JavaScript (ES6+)", "Vite", "Tailwind CSS"],
    },
    {
      title: "Tools",
      icon: "mdi:toolbox-outline",
      items: ["Jupyter Notebook","Google Colab","Git & GitHub", "Postman", "VS Code", "Trello"],
    },
  ];

  return (
    <SectionContainer
      id="skills"
      className="py-20 md:py-24 border-t border-violet-100/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Technologies I work with.
        </h2>

        <p className="text-neutral-600 text-base md:text-lg mb-12">
          A quick overview of the tools and technologies I use for data analytics, dashboard development, and full-stack web applications.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="
                group relative overflow-hidden
                rounded-2xl border border-neutral-200
                bg-white/75 shadow-sm
                p-8
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:border-violet-200
              "
            >
              {/* Hover glow background */}
              <div
                aria-hidden
                className="
                  pointer-events-none absolute inset-x-4 -top-10 h-24
                  bg-gradient-to-r from-violet-400/25 via-sky-400/20 to-amber-300/20
                  blur-3xl opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              <div className="relative z-[1] flex flex-col gap-5">

                {/* ICON + TITLE */}
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-2xl bg-white/70 border border-neutral-200
                      shadow-sm
                    "
                  >
                    <Icon
                      icon={group.icon}
                      className="text-[22px] text-violet-500"
                    />
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
                    {group.title}
                  </h3>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="
                        px-4 py-2
                        rounded-full text-[15px] font-medium
                        bg-white/40 backdrop-blur-sm
                        text-neutral-700
                        border border-neutral-300/60
                        transition-all duration-300 ease-out

                        group-hover:bg-white/70
                        hover:shadow-[0_0_12px_rgba(140,120,255,0.45)]
                        hover:border-violet-400/50
                        hover:text-neutral-900
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
