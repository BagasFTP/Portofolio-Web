// src/pages/AllProjects.jsx
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailModal from "../components/ProjectDetailModal";

export default function AllProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const handleOpenDetail = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  const totalProjects = projects.length;

  return (
    <motion.section
      className="
        pt-6 md:pt-8
        pb-20 md:pb-24
        border-t border-violet-100/60
        transform-gpu
      "
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Back */}
        <button
          type="button"
          onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
          className="
            mb-6 inline-flex items-center gap-1.5
            text-xs md:text-sm font-medium text-neutral-500
            hover:text-neutral-800 transition-colors
          "
        >
          <Icon icon="mdi:arrow-left" className="text-sm md:text-base" />
          <span>Back to Home</span>
        </button>

        {/* Heading + description + count */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          All Projects
        </h1>

        <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
            Explore my complete collection of projects — full-stack web
            applications, internal tools, analytics dashboards, and UI/UX
            explorations.
          </p>

          <p className="text-xs md:text-sm text-neutral-500">
            Showing{" "}
            <span className="font-semibold text-neutral-800">
              {totalProjects}
            </span>{" "}
            project{totalProjects > 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid semua project */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={handleOpenDetail}
            />
          ))}
        </div>
      </div>

      {/* Modal detail project */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseDetail}
        />
      )}
    </motion.section>
  );
}
