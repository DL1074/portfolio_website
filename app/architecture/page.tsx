export default function Architecture() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Architecture Gallery</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Visual representations of system designs, architectural patterns, and technical workflows
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Async Task Processing Architecture
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 mb-4">
                <div className="text-center">
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Diagram Placeholder</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Add image to:</p>
                  <code className="text-xs bg-white dark:bg-gray-800 px-3 py-2 rounded inline-block">
                    /public/images/architecture/async-processing.png
                  </code>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center italic">
                This diagram shows how async tasks prevent server tick blocking by offloading I/O operations 
                to separate threads, maintaining consistent performance under load.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Database Connection Pooling Flow
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 mb-4">
                <div className="text-center">
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Flowchart Placeholder</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Add image to:</p>
                  <code className="text-xs bg-white dark:bg-gray-800 px-3 py-2 rounded inline-block">
                    /public/images/architecture/connection-pooling.png
                  </code>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center italic">
                This flowchart illustrates HikariCP connection pooling strategy, demonstrating how connection 
                reuse minimizes overhead and prevents database connection exhaustion.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Virtual Hopper Network Detection System
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 mb-4">
                <div className="text-center">
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">System Design Placeholder</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Add image to:</p>
                  <code className="text-xs bg-white dark:bg-gray-800 px-3 py-2 rounded inline-block">
                    /public/images/architecture/vhn-system.png
                  </code>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center italic">
                This system design shows BFS-based network detection algorithm that identifies connected 
                hopper chains and virtualizes their item transfer for 8-10% server performance improvement.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                GraphQL Schema Validation Pipeline
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 mb-4">
                <div className="text-center">
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Architecture Diagram Placeholder</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Add image to:</p>
                  <code className="text-xs bg-white dark:bg-gray-800 px-3 py-2 rounded inline-block">
                    /public/images/architecture/graphql-pipeline.png
                  </code>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center italic">
                This architecture diagram depicts the automated schema review system with LLM-powered validation, 
                showing how it integrates with CI/CD pipelines to ensure schema quality before deployment.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Authentication Flow with Email Verification
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 mb-4">
                <div className="text-center">
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">Flow Diagram Placeholder</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Add image to:</p>
                  <code className="text-xs bg-white dark:bg-gray-800 px-3 py-2 rounded inline-block">
                    /public/images/architecture/auth-flow.png
                  </code>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center italic">
                This flow diagram illustrates the secure authentication system using AuthJS and AWS SES, 
                demonstrating how email verification reduces automated bot account creation by 40%.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cache-Based State Management
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 mb-4">
                <div className="text-center">
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">System Architecture Placeholder</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Add image to:</p>
                  <code className="text-xs bg-white dark:bg-gray-800 px-3 py-2 rounded inline-block">
                    /public/images/architecture/cache-state.png
                  </code>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center italic">
                This system architecture shows how state caching eliminates redundant computation by storing 
                propagation results and only recalculating on input changes, enabling large-scale operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
