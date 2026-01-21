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
                Add your background information here. Share your educational journey, 
                professional experiences, and what drives your passion in your field.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This is your opportunity to tell your story and connect with recruiters 
                on a personal level. Highlight your unique experiences and what makes you stand out.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Programming Languages (Python, JavaScript, etc.)</li>
                  <li>• Web Development (React, Next.js, etc.)</li>
                  <li>• Database Management (SQL, NoSQL)</li>
                  <li>• Cloud Services (AWS, Azure, etc.)</li>
                  <li>• Version Control (Git, GitHub)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Team Collaboration & Leadership</li>
                  <li>• Problem Solving & Critical Thinking</li>
                  <li>• Communication & Presentation</li>
                  <li>• Time Management & Organization</li>
                  <li>• Adaptability & Continuous Learning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Degree Name / Major</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">University Name</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Year - Year</p>
                <p className="text-gray-700 dark:text-gray-300">Add details about your degree, major achievements, relevant coursework, or honors.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Additional Education / Certifications</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Institution / Platform</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Year</p>
                <p className="text-gray-700 dark:text-gray-300">List any certifications, bootcamps, or additional training programs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
