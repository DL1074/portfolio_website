export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I&apos;d love to hear from you. Feel free to reach out about projects,
              internships, collaboration, or feedback on my portfolio.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-center">
              Want to connect? Tell me which project stood out to you, ask a question,
              or reach out about an opportunity.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-600 shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Email
                </h3>
                <a
                  href="mailto:david.lin001@outlook.com"
                  className="text-blue-600 dark:text-blue-400 font-semibold mb-1 inline-block hover:underline"
                >
                  david.lin001@outlook.com
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Best for professional inquiries and opportunities
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-600 shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/in/davidlin001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-semibold mb-1 inline-block hover:underline"
                >
                  linkedin.com/in/davidlin001
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Professional background and experience
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-600 shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  GitHub
                </h3>
                <a
                  href="https://github.com/DL1074"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-semibold mb-1 inline-block hover:underline"
                >
                  github.com/DL1074
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Projects, open source work, and code samples
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-600 shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Phone
                </h3>
                <a
                  href="tel:+18084287811"
                  className="text-blue-600 dark:text-blue-400 font-semibold mb-1 inline-block hover:underline"
                >
                  (808) 428-7811
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Available for calls or text
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Send Me a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Tell me why you&apos;re reaching out or which project on this site interested you most.
              </p>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share your question, feedback, or opportunity..."
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}