"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../constants/projects";

type AppType = "mobile" | "desktop";

const PersonalProjects: React.FC = () => {
  const [selectedType, setSelectedType] = useState<AppType>("mobile");

  const personalProjects = projects.filter(
    (project) => project.isPersonalProject //&& project.type === selectedType
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-0.5">
                Personal Projects
              </h2>
              <p className="text-gray-400">Actively evolving</p>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center bg-gray-900/80 rounded-full p-1.5 border border-gray-700/50">
              <button
                onClick={() => setSelectedType("mobile")}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedType === "mobile"
                    ? "text-gray-900 shadow-sm"
                    : "text-gray-300 hover:text-gray-100"
                }`}
              >
                <span className="relative z-10">Mobile Apps</span>
                {selectedType === "mobile" && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full -z-0 shadow-lg shadow-blue-500/20"
                    transition={{
                      type: "spring",
                      duration: 0.5,
                      bounce: 0.15,
                    }}
                  />
                )}
              </button>
              <button
                onClick={() => setSelectedType("desktop")}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedType === "desktop"
                    ? "text-gray-900 shadow-sm"
                    : "text-gray-300 hover:text-gray-100"
                }`}
              >
                <span className="relative z-10">Desktop</span>
                {selectedType === "desktop" && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full -z-0 shadow-lg shadow-blue-500/20"
                    transition={{
                      type: "spring",
                      duration: 0.5,
                      bounce: 0.15,
                    }}
                  />
                )}
              </button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PersonalProjects;
