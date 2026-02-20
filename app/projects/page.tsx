export default function Projects() {
  const projects = [
  {
    title: "Drinks Plugin",
  description:
    "High performance asynchronous Minecraft brewing system featuring NBT based custom ingredients, a configurable drunk meter engine, GUI shop economy, and async database architecture. Built with event driven design, DAO + manager patterns, and HikariCP connection pooling to ensure zero main thread blocking and minimal server performance impact.",
  technologies: [
    "Java",
    "Paper API",
    "HikariCP",
    "SQLite/MySQL",
    "NBT (PersistentDataContainer)",
    "Async Architecture"]
  },
  {
    title: "Virtual Hopper Networks (VHN)",
    description:
      "High performance Minecraft server optimization plugin that virtualizes hopper item transfer networks, reducing server load by 8–10% while maintaining vanilla throughput equivalence. Uses BFS based dynamic network detection and batch scheduling to distribute CPU load evenly across ticks.",
    technologies: ["Java", "Bukkit/Paper API", "Algorithms", "Performance Optimization"],
  },
  {
    title: "Virtual Signal Network (VSN)",
    description:
      "Redstone signal virtualization engine that caches propagation state and recalculates only on input changes, eliminating expensive block update cascades and enabling large scale redstone builds without performance degradation.",
    technologies: ["Java", "Game Engine Logic", "State Caching", "Systems Design"],
  },
  {
    title: "PocketBase",
    description:
      "Tradeable build packaging system that serializes structures into portable items with async capture/paste workflows to eliminate main thread lag. Includes real time previews, permission validation, and region safety checks.",
    technologies: ["Java", "FastAsyncWorldEdit", "NBT Data", "Async Processing"],
  },
  {
    title: "BasicQuests",
    description:
      "Dynamic daily quest engine with randomized objectives, persistent SQLite tracking, and modular event integrations. Includes profanity detection heuristics and reflection based plugin compatibility.",
    technologies: ["Java", "SQLite", "Reflection", "Plugin Architecture"],
  },
  {
    title: "Server Deflation Act",
    description:
      "Economy balancing auction system inspired by DealDash that removes excess currency from game economies through triple sink mechanics, auto bidding logic, and GUI based interactions.",
    technologies: ["Java", "GUI Systems", "Economy Design", "Event Logic"],
  },
  {
    title: "Scam Detection Extension",
    description:
      "Browser extension that evaluates website credibility using Whois API metadata and GPT analysis to help users detect fraudulent websites and make safer browsing decisions.",
    technologies: ["JavaScript", "Next.js", "OpenAI API", "Cybersecurity"],
  },
  
];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">A collection of my work and accomplishments</p>
          </div>
        
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
