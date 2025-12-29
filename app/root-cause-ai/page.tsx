export default function RootCauseAIPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Root-Cause AI
        </h1>
        <p className="text-xl text-gray-600">
          Multi-Agent LLM System for Automated Bug Detection and Resolution
        </p>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Root-Cause AI is a comprehensive multi-agent system that leverages large language models 
            to autonomously detect, analyze, and resolve bugs in codebases. The system performs 
            automated log analysis, identifies root causes, and generates code fixes without human intervention.
          </p>
          <p>
            Developed as an internal tool for Red Hat, this system demonstrates advanced AI/ML 
            integration and autonomous problem-solving capabilities.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Autonomous Log Analysis
            </h3>
            <p className="text-gray-600">
              Automatically parses and analyzes application logs to identify error patterns 
              and potential root causes.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Multi-Agent Architecture
            </h3>
            <p className="text-gray-600">
              Utilizes multiple specialized AI agents working in coordination to tackle 
              different aspects of bug resolution.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Code Fix Generation
            </h3>
            <p className="text-gray-600">
              Generates and validates code fixes automatically, ensuring compatibility 
              with existing codebase.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Root Cause Identification
            </h3>
            <p className="text-gray-600">
              Deep analysis to identify the underlying cause of issues rather than 
              just symptoms.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Stack</h2>
        <div className="flex flex-wrap gap-3">
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
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Demo/Video Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Demo</h2>

        
          <iframe
            className="w-full aspect-video rounded"
            src="https://www.youtube.com/embed/FCGltwZeiic?si=Ubjj_TOMl8EOq7xv"
            title="Root-Cause AI Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      {/* Impact */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Impact</h2>
        <div className="prose prose-lg text-gray-700">
          <p>
            This system significantly reduces the time required for bug identification and resolution, 
            enabling faster development cycles and improved code quality. It serves as a powerful 
            tool for development teams working on complex application modernization projects.
          </p>
        </div>
      </div>
    </div>
  );
}
