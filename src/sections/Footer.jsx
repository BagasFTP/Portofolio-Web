// src/sections/Footer.jsx
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        mt-24 
        bg-gradient-to-r 
        from-indigo-200/60 
        via-purple-200/50 
        to-indigo-100/60
        backdrop-blur-xl
        text-neutral-800
      "
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-14 grid gap-12 md:grid-cols-3">
        
        {/* Get in touch */}
        <div>
          <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-500 mb-4">
            Get in touch
          </h3>

          {/* Email */}
          <a
            href="mailto:bagasfirdaustriputra@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3 text-sm group
              transition-all duration-200
            "
          >
            <Icon
              icon="mdi:email-outline"
              className="
                text-xl text-neutral-600
                transition-all duration-200
                group-hover:text-violet-600
                group-hover:scale-110
              "
            />
            <span
              className="
                transition-all duration-200
                group-hover:text-violet-700
                group-hover:translate-x-0.5
              "
            >
              bagasfirdaustriputra@gmail.com
            </span>
          </a>
        </div>

        {/* Contact me */}
        <div>
          <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-500 mb-4">
            Contact me
          </h3>

          <ul className="space-y-3 text-sm">

            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/bagaeees/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3 group 
                  transition-all duration-200
                "
              >
                <Icon
                  icon="mdi:instagram"
                  className="
                    text-xl text-neutral-600
                    transition-all duration-200
                    group-hover:text-violet-600
                    group-hover:scale-110
                  "
                />
                <span className="
                  transition-all duration-200
                  group-hover:text-violet-700
                  group-hover:translate-x-0.5
                ">
                  Instagram
                </span>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/bagasfirdaustriputra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-all duration-200"
              >
                <Icon
                  icon="mdi:linkedin"
                  className="
                    text-xl text-neutral-600
                    transition-all duration-200
                    group-hover:text-violet-600
                    group-hover:scale-110
                  "
                />
                <span className="
                  transition-all duration-200
                  group-hover:text-violet-700
                  group-hover:translate-x-0.5
                ">
                  LinkedIn
                </span>
              </a>
            </li>

            {/* Github */}
            <li>
              <a
                href="https://github.com/BagasFTP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-all duration-200"
              >
                <Icon
                  icon="mdi:github"
                  className="
                    text-xl text-neutral-600
                    transition-all duration-200
                    group-hover:text-violet-600
                    group-hover:scale-110
                  "
                />
                <span className="
                  transition-all duration-200
                  group-hover:text-violet-700
                  group-hover:translate-x-0.5
                ">
                  GitHub
                </span>
              </a>
            </li>

          </ul>
        </div>

        {/* Lets talk */}
        <div className="flex items-start md:items-center justify-start md:justify-end">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-700">
            LETS TALK
          </h2>
        </div>
      </div>
    </footer>
  );
}
