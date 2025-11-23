// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const menu = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Portfolio" },
  { id: "footer", label: "Contact" },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    navigate("/", { state: { scrollTo: id } });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-transparent backdrop-blur-xl">
      <div
        className="
          mx-auto 
          max-w-7xl 
          flex items-center justify-between 
          px-8 md:px-12 
          py-3 md:py-4
        "
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="
            text-[26px] md:text-[30px]
            font-semibold tracking-tight
            bg-gradient-to-r from-sky-500 via-violet-500 to-amber-300
            bg-clip-text text-transparent
          "
        >
          Bagas.
        </button>

        {/* Menu */}
        <nav className="flex items-center gap-6 md:gap-10">
          {menu.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="
                cursor-pointer
                px-6 md:px-7
                py-2.5 md:py-3
                rounded-full
                text-[16px] md:text-[19px]
                font-medium
                text-neutral-700
                transition-all duration-200

                hover:bg-white/40
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
      </div>
    </header>
  );
};

export default Navbar;
