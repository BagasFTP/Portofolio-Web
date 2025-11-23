// src/sections/About.jsx
import SectionContainer from "../components/SectionContainer";

export default function About() {
  return (
    <SectionContainer>
      {/* Elemen ini yang di-scroll dari navbar */}
      <div
        id="about"
        className="
          scroll-mt-10 md:scroll-mt-12
          max-w-6xl mx-auto
          px-6 md:px-10
          pt-14 md:pt-16
          pb-24
        "
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          A bit about me.
        </h2>

        {/* Intro text */}
        <p className="text-neutral-700 text-sm md:text-base leading-relaxed max-w-4xl">
          I&apos;m a 5th-semester Informatics student based in Surabaya, focusing on data analysis while also having strong skills in full-stack web development. My main tools include Python, SQL, Power BI, Laravel, React, and Tailwind CSS
          <br />
          <br />
          I enjoy exploring data to uncover insights, designing clear dashboards, and turning raw datasets into meaningful stories that support decision-making. Alongside my data work, I also build maintainable backend systems and responsive front-end interfaces for real-world projects.
          <br />
          <br />
          Right now, I&apos;m building a portfolio of analytics dashboards, data-driven case studies, and web applications to strengthen my technical expertise and help solve problems through clean, purposeful design.
        </p>

        {/* Highlight card */}
        <div
          className="
            mt-10
            rounded-3xl
            bg-white/70
            border border-violet-100/70
            shadow-[0_18px_45px_rgba(15,23,42,0.08)]
            px-6 md:px-10
            py-7 md:py-8
          "
        >
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-violet-500 mb-4">
            Highlights
          </p>

          <ul className="list-disc pl-4 md:pl-5 space-y-2 text-sm md:text-base text-neutral-700">
            <li>Data analysis using Python (pandas, numpy), SQL, and Power BI</li>
            <li>Dashboard development & storytelling for decision-making</li>
            <li>
              Full-stack development: Laravel REST API + React front-end
            </li>
            <li>
              Comfortable with Git, GitHub workflow, and team collaboration
            </li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
