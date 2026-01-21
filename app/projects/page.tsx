export default function Projects() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A comprehensive web application that solves real-world problems with modern technologies and best practices.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Project Beta",
      description: "An innovative mobile-first solution designed to enhance user experience and streamline workflows.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    },
    {
      title: "Project Gamma",
      description: "A data-driven platform that leverages analytics and automation to deliver actionable insights.",
      technologies: ["Python", "Django", "Redis", "Docker"],
    },
    {
      title: "Project Delta",
      description: "An elegant UI/UX focused application that prioritizes accessibility and responsive design.",
      technologies: ["Vue.js", "Express", "MySQL", "Sass"],
    },
    {
      title: "Project Epsilon",
      description: "A scalable microservices architecture built for high-performance and reliability.",
      technologies: ["Go", "Kubernetes", "GraphQL", "RabbitMQ"],
    },
    {
      title: "Project Zeta",
      description: "An AI-powered tool that automates complex tasks and improves productivity.",
      technologies: ["TensorFlow", "FastAPI", "React", "PostgreSQL"],
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
