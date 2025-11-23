// src/components/Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const menu = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Portfolio" },
  { id: "footer", label: "Contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    // tutup menu dulu
    setIsOpen(false);

    // arahkan ke home + scroll ke section
    navigate("/", { state: { scrollTo: id } });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-violet-100/60">
      <div
        className="
          mx-auto max-w-7xl
          flex items-center justify-between
          px-4 sm:px-6 md:px-10
          py-2.5 md:py-3
          relative
        "
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="
            text-[22px] sm:text-[24px] md:text-[28px]
            font-semibold tracking-tight
            bg-gradient-to-r from-sky-500 via-violet-500 to-amber-300
            bg-clip-text text-transparent
          "
        >
          Bagas.
        </button>

        {/* DESKTOP MENU */}
        <nav
          className="
            hidden md:flex
            items-center justify-end
            gap-6
          "
        >
          {menu.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="
                rounded-full
                text-sm md:text-[15px]
                font-medium
                text-neutral-700
                px-5 py-2
                transition-all duration-200
                hover:bg-white
                hover:text-neutral-900
                hover:shadow-sm
                hover:-translate-y-[1px]
                active:translate-y-[1px]
              "
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* MOBILE / TABLET HAMBURGER */}
        <button
          type="button"
          className="
            md:hidden
            inline-flex items-center justify-center
            h-9 w-9
            rounded-full
            border border-neutral-200
            bg-white/80
            shadow-sm
            hover:bg-white
            transition-all
          "
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <Icon
            icon={isOpen ? "mdi:close" : "mdi:menu"}
            className="text-[20px] text-neutral-700"
          />
        </button>

        {/* MOBILE DROPDOWN MENU */}
        {isOpen && (
          <div
            className="
              md:hidden
              absolute
              top-full right-4 left-4
              mt-2
              rounded-2xl
              border border-neutral-200
              bg-white/95
              shadow-[0_18px_45px_rgba(15,23,42,0.18)]
              overflow-hidden
            "
          >
            <nav className="flex flex-col">
              {menu.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="
                    text-left
                    px-4 py-3
                    text-sm font-medium
                    text-neutral-700
                    hover:bg-neutral-50
                    active:bg-neutral-100
                    transition-colors
                  "
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
