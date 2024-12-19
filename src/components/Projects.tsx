"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects, { Project } from "../constants/projects";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Group projects by year
  const projectsByYear = projects.reduce(
    (acc: { [key: string]: Project[] }, project) => {
      const year = project.year || 2023;
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

  // Get visible years based on showAll state
  const visibleYears = showAll ? sortedYears : sortedYears.slice(0, 1); // Show first 2 years by default

  const hasMoreYears = sortedYears.length > 2;

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

        <AnimatePresence mode="wait">
          <div className="space-y-12 sm:space-y-16">
            {visibleYears.map((year, yearIndex) => (
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
                    <ProjectCard
                      key={project.name}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Show More Button */}
        {hasMoreYears && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-6 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">
                {showAll
                  ? "Show Less"
                  : `Show ${sortedYears.length - 2} More Years`}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full -z-0"
                whileHover={{
                  scale: 1.05,
                  background:
                    "linear-gradient(to right, rgba(37, 99, 235, 0.3), rgba(59, 130, 246, 0.3))",
                }}
              />
              <motion.div
                className="absolute inset-0 border border-blue-500/50 rounded-full"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Animated Arrow */}
              <motion.svg
                className={`w-4 h-4 ml-2 inline-block transition-transform duration-200 ${
                  showAll ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </motion.svg>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
