export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company Inc.",
      period: "January 2023 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers in best practices.",
      responsibilities: [
        "Architected and implemented microservices infrastructure serving 100K+ users",
        "Led a team of 5 developers in agile development cycles",
        "Reduced application load time by 40% through optimization",
        "Implemented CI/CD pipelines improving deployment efficiency by 60%",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "June 2021 - December 2022",
      description: "Developed and maintained full-stack applications using modern web technologies.",
      responsibilities: [
        "Built responsive web applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver projects on time",
        "Implemented RESTful APIs and database optimization strategies",
        "Participated in code reviews and maintained high code quality standards",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "March 2020 - May 2021",
      description: "Contributed to various projects while learning industry best practices and modern development workflows.",
      responsibilities: [
        "Developed features for web and mobile applications",
        "Fixed bugs and improved application performance",
        "Wrote unit tests and documentation for code modules",
        "Participated in daily standups and sprint planning meetings",
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
