export default function Experience() {
  const experiences = [
  {
    title: "Incoming Software Leadership Development Associate",
    company: "CVS Health — Irving, Texas",
    period: "Starting July 2026",
    description:
      "Accepted full-time offer to join CVS Health’s Software Leadership Development Program following internship performance.",
    responsibilities: [
      "Selected for CVS Health’s competitive early-career engineering leadership program."
    ],
  },
    {
    title: "Software Engineer Intern",
    company: "CVS Health — Woonsocket, Rhode Island",
    period: "May 2025 – August 2025",
    description:
      "Worked on platform engineering tooling for internal developer workflows and schema validation automation.",
    responsibilities: [
      "Designed and implemented an automated GraphQL schema review system for the I90 platform, reducing manual review time for 20+ engineers and improving schema quality and consistency.",
      "Achieved 96% unit test coverage and developed robust integration tests using real Gemini and Ollama APIs, including LLM-powered validation workflows.",
      "Implemented LLM-based schema interpretation and feedback generation, enhancing the review process with AI-driven insights and reducing manual intervention.",
      "Contributed 26+ commits and over 20,000 lines of code; successfully merged project into the main branch for production.",
      "Contributed to the design and documentation of a schema validation process flow, outlining user interactions, system responsibilities, and exception handling across multiple roles.",
      "Supported integration of schema collision detection and GenAI tooling into the automated review pipeline, helping reduce naming conflicts and improve governance.",
      "Collaborated cross-functionally with developers and support teams to define fallback procedures for manual intervention when automation encounters edge cases.",
      "Collaborated with mentors and cross-functional teams to align with evolving project scope and CVS Health standards.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Takin.AI — Newark, Delaware",
    period: "May 2024 – September 2024",
    description:
      "Built authentication systems, testing infrastructure, and AI-integrated workflow automation for production systems.",
    responsibilities: [
      "Developed and deployed a secure email authentication system with Next.js, AuthJS, and AWS SES, using AI-based bot detection to cut automated account creation by 40%, minimizing operating costs by about 5%.",
      "Expanded Playwright-based automated testing, increasing test coverage from 5% to 20% and improving overall platform reliability.",
      "Revamped AI workflows with Dify and OpenAI’s API, automating data pipelines and cutting manual tasks by 15%.",
    ],
  },
  {
    title: "Developer Intern",
    company: "Prosale — Newark, Delaware",
    period: "May 2023 – September 2023",
    description:
      "Contributed to backend development and API-driven data analysis systems supporting e-commerce operations.",
    responsibilities: [
      "Used Python and Flask to contribute to backend development of a web application designed to create an online purchase fulfillment app, increasing product fulfillment by 10 percent.",
      "Utilized Amazon’s API with Python to analyze search keywords, optimizing product visibility and enhancing click-through rates to drive sales performance.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Prosale — Newark, Delaware",
    period: "May 2022 – September 2022",
    description:
      "Performed market analysis and workflow optimization using data-driven insights.",
    responsibilities: [
      "Conducted pricing analysis using Python web scraping, reviewing over 500 competitor listings to provide actionable insights that supported a 10% increase in sales.",
      "Optimized device upgrade procedures, streamlining workflows to boost device upgrade production rate by 17%, from 6 to 7 devices per hour.",
    ],
  },
];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Work Experience</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">My professional journey and accomplishments</p>
          </div>
        
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h2>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities & Achievements</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>• {resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
