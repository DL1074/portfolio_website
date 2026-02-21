import Image from 'next/image';

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
              <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg h-96 overflow-hidden mb-4">
                <Image
                  src="/images/async-processing.png"
                  alt="Async Task Processing Architecture"
                  fill
                  className="object-contain"
                />
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
              <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg h-96 overflow-hidden mb-4">
                <Image
                  src="/images/connection-pooling.png"
                  alt="Database Connection Pooling Flow"
                  fill
                  className="object-contain"
                />
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
              <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg h-96 overflow-hidden mb-4">
                <Image
                  src="/images/vhn-system.png"
                  alt="Virtual Hopper Network Detection System"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center italic">
                This system design shows BFS based network detection algorithm that identifies connected 
                hopper chains and virtualizes their item transfer for 8-10% server performance improvement.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cache-Based State Management
              </h2>
              <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg h-96 overflow-hidden mb-4">
                <Image
                  src="/images/cache-state.png"
                  alt="Cache-Based State Management"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center italic">
                This system architecture shows how state caching eliminates redundant computation by storing 
                propagation results and only recalculating on input changes, enabling large scale operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
