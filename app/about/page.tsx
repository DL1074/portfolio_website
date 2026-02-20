export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">My journey, skills, and what drives me</p>
          </div>
        
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Background</h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                I’m an Information Technology student at Rutgers University graduating May 2026. I have a minor in Computer Science and a focus on backend engineering, automation systems, and scalable platform developments.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                As a Software Engineer Intern at CVS Health, I designed and implemented an automated GraphQL schema review system used by 20+ engineers. I also integrated LLM-powered validation workflows that achieved an 96% test coverage and also significantly reduced manual review effort.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Previously at Takin.AI, I built a secure authentication system using Next.js, AuthJS, and AWS SES that reduced automated bot account creation by 40%. I also expanded automated testing coverage, and streamlined AI-powered data pipelines using OpenAI APIs.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I am passionate about designing high performance systems that eliminate unnecessary computation, optimize resource usage, and improve developer efficiency. I will be joining CVS Health full time in July 2026 as a Software Leadership Development Program Associate Developer.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h2>

            <div className="grid md:grid-cols-2 gap-8">
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Technical Skills
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Languages: Java, Python, C/C++, SQL, JavaScript, R</li>
                  <li>• Frontend: React, Next.js, HTML, CSS</li>
                  <li>• Backend: Node.js, Flask, FastAPI</li>
                  <li>• Databases: PostgreSQL, MongoDB, SQLite</li>
                  <li>• Cloud and DevOps: AWS, Google Cloud, Docker</li>
                  <li>• Testing and QA: Playwright, Unit and Integration Testing</li>
                  <li>• Tools: Git, VS Code, Visual Studio, PyCharm, PgAdmin</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Soft Skills
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Cross functional type engineering collaboration</li>
                  <li>• Technical documentation and system design</li>
                  <li>• Analytical problem solving</li>
                  <li>• Performance optimization mindset</li>
                  <li>• Clear technical communication</li>
                  <li>• Quick learning of new frameworks and tools</li>
                  <li>• Ownership of complex engineering tasks</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor of Science in Information Technology
                </h3>

                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  Rutgers University – New Brunswick
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Expected Graduation: May 2026 • Minor in Computer Science
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  Relevant focus areas include backend systems, information retrieval,
                  software engineering, automation, and scalable platform architecture.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
