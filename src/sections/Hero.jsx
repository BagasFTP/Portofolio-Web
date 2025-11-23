// src/sections/Hero.jsx
import { Icon } from "@iconify/react";
import SectionContainer from "../components/SectionContainer";

export default function Hero() {
  return (
    <SectionContainer id="home" className="min-h-screen flex items-center">
      <div
        className="
          max-w-7xl mx-auto 
          px-6 md:px-10 
          py-20 md:py-24 
          flex flex-col md:flex-row 
          items-center gap-16
        "
      >
        {/* FOTO / RIGHT VISUAL (MOBILE DI ATAS) */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <div className="relative">
            {/* GLOW BACKGROUND */}
            <div
              className="
                absolute -inset-8 bg-gradient-to-br
                from-violet-400/20 via-indigo-400/12 to-sky-300/10
                blur-2xl rounded-full pointer-events-none
              "
            />

            {/* MAIN CONTAINER */}
            <div
              className="
                relative h-64 w-64 sm:h-72 sm:w-72 
                flex items-center justify-center
                group
              "
            >
              {/* SMALL FLOATING BUBBLES */}
              <div className="pointer-events-none">
                <div
                  className="
                    absolute h-4 w-4 rounded-full 
                    bg-violet-500 shadow-md shadow-violet-300/60
                    bottom-[14%] -left-3
                    animate-bubble-1
                  "
                />
                <div
                  className="
                    absolute h-5 w-5 rounded-full 
                    bg-sky-400 shadow-md shadow-sky-300/60
                    top-[12%] -left-2
                    animate-bubble-2
                  "
                />
                <div
                  className="
                    absolute h-4 w-4 rounded-full 
                    bg-violet-400 shadow-md shadow-violet-300/60
                    top-[18%] -right-3
                    animate-bubble-3
                  "
                />
                <div
                  className="
                    absolute h-5 w-5 rounded-full 
                    bg-indigo-500 shadow-md shadow-indigo-300/60
                    bottom-[18%] -right-4
                    animate-bubble-4
                  "
                />
              </div>

              {/* RING GRADIENT */}
              <div
                className="
                  absolute inset-1 rounded-full 
                  bg-[conic-gradient(from_220deg_at_50%_50%,#6366f1,#0ea5e9,#a855f7,#fbbf24,#6366f1)]
                  opacity-70
                  transition-transform duration-700
                  group-hover:scale-[1.03] group-hover:rotate-2
                "
              />

              {/* INNER RING / GLASS */}
              <div
                className="
                  absolute inset-6 rounded-full
                  bg-white/10
                  border border-white/30
                  backdrop-blur-sm
                "
              />

              {/* PROFILE PHOTO */}
              <div
                className="
                  relative h-56 w-56 sm:h-64 sm:w-64
                  rounded-full overflow-hidden 
                  shadow-[0_10px_35px_rgba(79,70,229,0.25)]
                "
              >
                <img
                  src="/Bagas_Firdaus_Tri_Putra.png"
                  alt="Bagas Firdaus"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* TEKS / LEFT SIDE */}
        <div
          className="
            w-full md:w-1/2 
            order-2 md:order-1 
            flex flex-col 
            items-center md:items-start 
            text-center md:text-left
          "
        >
          <p className="text-sm font-semibold tracking-[0.25em] text-violet-500 uppercase mb-3">
            Hi! I Am
          </p>

          <h1
            className="
              text-4xl sm:text-5xl lg:text-6xl 
              font-bold tracking-tight text-neutral-900
            "
          >
            Bagas{" "}
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-amber-400 bg-clip-text text-transparent">
              Firdaus.
            </span>
          </h1>

          <p className="mt-5 text-neutral-600 max-w-xl text-base sm:text-lg leading-relaxed">
            I explore data, design dashboards, and develop modern full-stack
            applications. Working with Python, Power BI, SQL, Laravel, and
            React to build efficient analytical and web solutions.
          </p>

          {/* BUTTON */}
          <div className="mt-8">
            <a
              href="#about"
              className="
                group inline-flex items-center gap-3 rounded-full
                bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500
                px-7 py-3 text-sm sm:text-base font-semibold text-white
                shadow-md shadow-violet-400/40
                transition-all duration-200
                hover:shadow-lg hover:shadow-violet-400/50 hover:translate-y-[1px]
                active:translate-y-[2px]
              "
            >
              <span>About me</span>

              <Icon
                icon="icon-park-outline:arrow-right-up"
                className="
                  text-lg bg-white/20 p-1 rounded-full 
                  transition-transform duration-200
                  group-hover:translate-x-1 group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
