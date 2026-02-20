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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How I Build Systems</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My engineering philosophy is rooted in building efficient, scalable systems that solve real problems. 
              Here are the core principles that guide my approach to software development:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Measure Before Optimizing</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use profiling and metrics to identify actual bottlenecks rather than assumptions. 
                  Data-driven decisions lead to meaningful performance improvements.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Prefer Async Over Sync for I/O</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non-blocking operations prevent thread starvation and improve throughput. 
                  Async architecture enables systems to handle more concurrent operations efficiently.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Design Systems to Degrade Gracefully</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Build fault-tolerant systems with fallback mechanisms. Partial failures shouldn&apos;t 
                  cascade into complete system outages.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Eliminate Unnecessary Computation</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Cache results, batch operations, and avoid redundant work. The fastest code 
                  is the code that doesn&apos;t run at all.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Write Testable, Maintainable Code</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Prioritize code clarity and comprehensive test coverage. Well-tested systems 
                  enable confident iteration and refactoring.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Scale Horizontally When Possible</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Design stateless services that can be replicated. Horizontal scaling provides 
                  better fault tolerance and more predictable performance characteristics.
                </p>
              </div>
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

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Engineering Principles</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              These quotes capture the essence of what I believe makes great software engineering:
            </p>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-3">
                  &quot;Programs must be written for people to read, and only incidentally for machines to execute.&quot;
                </p>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  — Harold Abelson
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-3">
                  &quot;The best performance optimization is eliminating unnecessary work.&quot;
                </p>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  — Donald Knuth
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Currently Exploring</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I&apos;m continuously expanding my technical knowledge in areas that align with building high-performance, scalable systems:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>Distributed system scaling and consensus algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>Compiler-level optimizations and performance profiling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>Memory-efficient architectures and cache optimization strategies</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
