export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Profile Image Placeholder
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Add your image to:
                  </p>
                  <code className="inline-block bg-white dark:bg-gray-800 px-3 py-2 rounded text-xs text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                    /public/images/profile.jpg
                  </code>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Introduction
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Add your introduction here. Share who you are, what you do, and what makes you unique.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This is your opportunity to make a strong first impression with recruiters and potential employers.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Site Objective
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              This portfolio website serves as a comprehensive showcase of my professional journey, 
              skills, and accomplishments. It&apos;s designed to provide recruiters and potential employers 
              with a clear view of my capabilities and achievements in a clean, organized format.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
