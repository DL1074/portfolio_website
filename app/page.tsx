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
                Hi, I’m David Lin. I am a Informational Technology and Informatics (ITI) student at Rutgers University with a focus on backend development, automation, and scalable systems. 
                I enjoy building reliable, performance oriented tools, and exploring how AI can improve real world through workflows. 
                This site serves as a snapshot of my technical background, projects, and experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Use the navigation menu to explore my projects, technical skills, and experience in more detail.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Site Objective
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The objective of this website is to provide a clear, organized overview of my skills, projects, and experience. 
              It is designed to help recruiters, employers, and peers quickly understand my technical background and explore my work.
              It is also designed for them to navigate relevant sections through a consistent menu available on every page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
