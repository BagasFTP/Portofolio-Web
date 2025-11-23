// src/sections/Projects.jsx
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailModal from "../components/ProjectDetailModal";
import SectionContainer from "../components/SectionContainer";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const handleOpenDetail = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  // 🔹 Ambil hanya project highlight (isFeatured = true), maksimal 4
  const highlightProjects = projects
    .filter((p) => p.isFeatured)
    .slice(0, 4);

  return (
    <SectionContainer
      id="projects"
      className="py-20 md:py-24 border-t border-violet-100/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Portfolio.
        </h2>
        <p className="text-neutral-600 text-sm md:text-base mb-10 max-w-2xl">
          A selection of projects that represent how I design, build, and ship
          web experiences and analytics dashboards.
        </p>

        {/* Grid hanya untuk 4 highlight project */}
        <div className="grid gap-8 md:grid-cols-2 auto-rows-fr">
          {highlightProjects.map((project) => (
            <div key={project.id} className="h-full flex">
              <ProjectCard project={project} onOpen={handleOpenDetail} />
            </div>
          ))}
        </div>

        {/* Tombol See More Projects */}
        <div className="flex justify-center mt-12">
          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="
              group
              inline-flex items-center gap-2
              px-6 py-3
              rounded-full
              text-sm md:text-base font-medium
              bg-white/70 text-violet-700
              border border-violet-200
              shadow-[0_10px_30px_rgba(15,23,42,0.06)]
              transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]
            "
          >
            See more projects
            <Icon
              icon="mdi:arrow-right"
              className="
                text-lg
                transition-all duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>

      {/* MODAL VIEW DETAIL */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseDetail}
        />
      )}
    </SectionContainer>
  );
}
