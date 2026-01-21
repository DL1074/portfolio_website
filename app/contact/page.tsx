export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">I'd love to hear from you!</p>
          </div>
        
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-center">
              Whether you have a question, want to discuss a project, or just want to connect, 
              feel free to reach out through any of the channels below.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Email</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">your.email@example.com</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Best for detailed inquiries</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">LinkedIn</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">linkedin.com/in/yourprofile</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Professional networking</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">GitHub</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">github.com/yourusername</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Check out my code</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Phone</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">+1 (123) 456-7890</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Quick conversations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
