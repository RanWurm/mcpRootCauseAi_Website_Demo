import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Software Engineer Intern
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Red Hat - Konveyor AI Team
        </p>
        <p className="text-lg text-gray-500">
          Specializing in AI-Assisted Application Modernization & Test Automation
        </p>
      </div>

      {/* About Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            I'm a Software Engineer Intern at Red Hat, working on the Konveyor AI (Kai) team, 
            focusing on editor-extensions for AI-assisted application modernization. 
            I develop test automation infrastructure, MCP client authentication systems, 
            and solution server connectivity.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Work</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* MCP Presentation */}
          <Link
            href="/mcp-presentation"
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              MCP Client Presentation
            </h3>
            <p className="text-gray-600 mb-4">
              Technical presentation on authentication system refactoring and OAuth2 implementation.
            </p>
            <span className="text-primary font-medium">View Presentation →</span>
          </Link>

          {/* Root-Cause AI Presentation */}
          <Link
            href="/rootCauseAi-presentation"
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Root-Cause AI Presentation
            </h3>
            <p className="text-gray-600 mb-4">
              Technical presentation on multi-agent AI system for automated bug detection.
            </p>
            <span className="text-primary font-medium">View Presentation →</span>
          </Link>

          {/* Root-Cause AI Demo */}
          <Link
            href="/root-cause-ai"
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Root-Cause AI Demo
            </h3>
            <p className="text-gray-600 mb-4">
              Interactive demo and detailed documentation of the Root-Cause AI system.
            </p>
            <span className="text-primary font-medium">View Demo →</span>
          </Link>

          {/* MCP Client Demo */}
          <Link
            href="/mcp-client"
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              MCP Client Demo
            </h3>
            <p className="text-gray-600 mb-4">
              Interactive demo and technical details of authentication refactoring work.
            </p>
            <span className="text-primary font-medium">View Demo →</span>
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Test Automation',
            'TypeScript/JavaScript',
            'React & React Native',
            'VS Code Extensions',
            'Playwright Testing',
            'OAuth2 & Authentication',
            'AI/ML Integration',
            'Full-Stack Development',
            'Debugging & Performance',
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded text-center text-gray-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-4">
          Interested in discussing quality engineering, test automation, or AI-assisted development?
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-secondary text-white rounded hover:bg-blue-700 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
