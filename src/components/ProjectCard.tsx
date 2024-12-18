import React from "react";
import { motion } from "framer-motion";

interface Project {
  name: string;
  desc: string;
  domains: string[];
  country: string;
  image: string;
  playStore?: string;
  appStore?: string;
  year: number;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { name, desc, domains, country, image, playStore, appStore } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 flex h-28 sm:h-32 hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-[1.02]"
    >
      {/* Project Icon */}
      <div className="relative w-28 sm:w-32 flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-3 sm:p-4 overflow-hidden">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-100 truncate">
            {name}
          </h3>
          <span className="text-sm text-gray-400 flex-shrink-0">{country}</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-1">
          {desc}
        </p>

        {/* Bottom Row */}
        <div className="flex justify-between items-center mt-2 sm:mt-3">
          {/* Domains */}
          <div className="flex gap-1.5 flex-wrap flex-1 min-w-0">
            {domains.slice(0, 2).map((domain, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-gray-700 text-blue-400 text-xs rounded-full truncate"
              >
                {domain}
              </span>
            ))}
            {domains.length > 2 && (
              <span className="text-xs text-gray-400">
                +{domains.length - 2}
              </span>
            )}
          </div>

          {/* Store Links */}
          <div className="flex gap-3 flex-shrink-0">
            {playStore && (
              <a
                href={playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </a>
            )}
            {appStore && (
              <a
                href={appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
