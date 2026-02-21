import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative w-full h-80 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Introduction
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Hi, I’m David Lin. I am an Informational Technology and Informatics student at Rutgers University with a focus on backend development, automation, and scalable systems. 
                I enjoy building reliable, performance oriented tools, and exploring how AI can improve the real world through workflows. 
                This site serves as a snapshot of my technical background, projects, and experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Explore my projects below or view my experience.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Technical Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 dark:text-gray-300">
                  Built system used by 20+ engineers
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 dark:text-gray-300">
                  96% test coverage achieved
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 dark:text-gray-300">
                  Reduced bot traffic by 40%
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 dark:text-gray-300">
                  Optimized server load by 10%
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
