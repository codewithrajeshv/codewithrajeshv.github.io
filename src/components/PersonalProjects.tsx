"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../constants/projects";

const PersonalProjects: React.FC = () => {
  const personalProjects = projects.filter(
    (project) => project.isPersonalProject
  );

  if (personalProjects.length === 0) return null;

  return (
    <section className="w-full bg-gray-800/50 py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-0.5">
            Personal Projects
          </h2>
          <p className="text-gray-400">Actively working to improve them.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {personalProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalProjects;
