'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
  {
    title: "Drinks Plugin",
  description:
    "High performance asynchronous Minecraft brewing system featuring NBT based custom ingredients, a configurable drunk meter engine, GUI shop economy, and async database architecture. ",
  technologies: [
    "Java",
    "Paper API",
    "HikariCP",
    "SQLite/MySQL",
    "NBT (PersistentDataContainer)",
    "Async Architecture"],
  category: "Plugins"
  },
  {
    title: "Virtual Hopper Networks (VHN)",
    description:
      "High performance Minecraft server optimization plugin that virtualizes hopper item transfer networks, reducing server load by 8–10% while maintaining vanilla throughput equivalence.",
    technologies: ["Java", "Bukkit/Paper API", "Algorithms", "Performance Optimization"],
    category: "Performance"
  },
  {
    title: "Virtual Signal Network (VSN)",
    description:
      "Redstone signal virtualization engine that caches propagation state and recalculates only on input changes, eliminating expensive block update cascades and enabling large scale redstone builds without performance degradation.",
    technologies: ["Java", "Game Engine Logic", "State Caching", "Systems Design"],
    category: "Performance"
  },
  {
    title: "PocketBase",
    description:
      "Tradeable build packaging system that serializes structures into portable items with async capture/paste workflows to eliminate main thread lag. Includes real time previews, permission validation, and region safety checks.",
    technologies: ["Java", "FastAsyncWorldEdit", "NBT Data", "Async Processing"],
    category: "Plugins"
  },
  {
    title: "BasicQuests",
    description:
      "Dynamic daily quest engine with randomized objectives, persistent SQLite tracking, and modular event integrations. ",
    technologies: ["Java", "SQLite", "Reflection", "Plugin Architecture"],
    category: "Plugins"
  },
  {
    title: "Server Deflation Act",
    description:
      "Economy balancing auction system inspired by DealDash that removes excess currency from game economies through triple sink mechanics, auto bidding logic, and GUI based interactions.",
    technologies: ["Java", "GUI Systems", "Economy Design", "Event Logic"],
    category: "Backend"
  },
  {
    title: "Scam Detection Extension",
    description:
      "Browser extension that evaluates website credibility using Whois API metadata and GPT analysis to help users detect fraudulent websites and make safer browsing decisions.",
    technologies: ["JavaScript", "Next.js", "OpenAI API", "Cybersecurity"],
    category: "AI"
  },
  
];

  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const categories = ['All', 'Backend', 'Performance', 'AI', 'Plugins'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">A collection of my work and accomplishments</p>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 mb-2">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.title !== "Server Deflation Act" && project.title !== "Scam Detection Extension" && project.title !== "Virtual Signal Network (VSN)" && (
                    <>
                      <button
                        onClick={() => toggleProject(index)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        {expandedProject === index ? '▼' : '▶'} View Details
                      </button>

                      {expandedProject === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">UI Screenshot</h3>
                        <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg h-64 overflow-hidden">
                          <Image
                            src={`/images/${project.title.toLowerCase().replace(/\s+/g, '-')}-screenshot.png`}
                            alt={`${project.title} Screenshot`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Architecture Diagram</h3>
                        <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg h-64 overflow-hidden">
                          <Image
                            src={`/images/${project.title.toLowerCase().replace(/\s+/g, '-')}-architecture.png`}
                            alt={`${project.title} Architecture`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Code Architecture</h3>
                        <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg h-64 overflow-hidden">
                          <Image
                            src={`/images/${project.title.toLowerCase().replace(/\s+/g, '-')}-code.png`}
                            alt={`${project.title} Code Architecture`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Technical Explanation</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {project.description}
                        </p>
                      </div>
                    </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
