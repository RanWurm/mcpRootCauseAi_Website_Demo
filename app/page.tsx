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
            I'm a Software Engineer Intern at Red Hat. I started on Konveyor AI (Kai/MTA), where Kai uses AI to modernize and migrate legacy Java applications. 
            I'm now an AI Developer on MTC (Migration Toolkit for Containers), 
            focused on migration workflows on OpenShift-Red Hat's Kubernetes platform.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">On This Portfolio</h2>
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
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Skills Presented</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Multi-Agent AI System',
            'LLM Orchestration',
            'Autonomous Code Analysis',
            'Real-time Log Parsing',
            'Git Version Control Automation',
            'Telegram Bot Integration',
            'AST-based Code Extraction',
            'Context-Aware Debugging',
            'Interactive User Feedback Loop',
            'Test Automation (Vitest/Jest)',
            'Dynamic Tool Invocation',
            'Artifact Management',
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
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Code And Documents</h2>
        <p className="text-gray-600 mb-4">
          You can Find The Source Code Of The Open-Source Code Here 
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/RanWurm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
