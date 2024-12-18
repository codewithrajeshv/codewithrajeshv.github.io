"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import projects, { Project } from "../constants/projects";
import { motion } from "framer-motion";

const Projects = () => {
  // Group projects by year (assuming you'll add year to your project data)
  const projectsByYear = projects.reduce(
    (acc: { [key: string]: Project[] }, project) => {
      const year = project.year || 2023; // Default to 2023 if year is not specified
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(project);
      return acc;
    },
    {}
  );

  // Sort years in descending order
  const sortedYears = Object.keys(projectsByYear).sort(
    (a: string, b: string) => parseInt(b) - parseInt(a)
  );

  return (
    <section className="py-8 sm:py-16 px-3 sm:px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-left mb-8 sm:mb-12 text-gray-100"
        >
          Project Timeline
        </motion.h2>

        <div className="space-y-12 sm:space-y-16">
          {sortedYears.map((year, yearIndex) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: yearIndex * 0.2 }}
              className="relative"
            >
              {/* Year Label */}
              <motion.div
                className="flex items-center mb-6 sm:mb-8"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: yearIndex * 0.2 + 0.3 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl sm:text-2xl font-bold text-white">
                  {year}
                </div>
                <div className="h-0.5 flex-1 bg-blue-600 ml-3 sm:ml-4"></div>
              </motion.div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {projectsByYear[year].map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
