export default function MCPClientPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          MCP Client Authentication
        </h1>
        <p className="text-xl text-gray-600">
          Authentication System Refactoring for Konveyor AI Editor-Extensions
        </p>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Comprehensive authentication system refactoring for the Konveyor AI editor-extensions project. 
            This work focused on implementing robust MCP (Model Context Protocol) client authentication, 
            OAuth2 token management, and resolving complex race conditions in concurrent authentication scenarios.
          </p>
          <p>
            The project ensures secure and reliable communication between VS Code extensions and 
            solution servers while maintaining optimal user experience.
          </p>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Challenges & Solutions
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Race Condition Resolution
            </h3>
            <p className="text-gray-600 mb-3">
              <strong>Challenge:</strong> Multiple concurrent authentication requests causing 
              token conflicts and auth failures.
            </p>
            <p className="text-gray-600">
              <strong>Solution:</strong> Implemented a token management system with proper 
              synchronization, request queuing, and atomic operations to ensure thread-safe 
              authentication flows.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              OAuth2 Token Lifecycle
            </h3>
            <p className="text-gray-600 mb-3">
              <strong>Challenge:</strong> Complex token refresh logic and expiration handling 
              across multiple auth flows.
            </p>
            <p className="text-gray-600">
              <strong>Solution:</strong> Designed a robust token lifecycle management system 
              with automatic refresh, proactive expiration detection, and graceful error handling.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Test Automation Infrastructure
            </h3>
            <p className="text-gray-600 mb-3">
              <strong>Challenge:</strong> Verifying authentication flows in VS Code extension 
              environment with Playwright.
            </p>
            <p className="text-gray-600">
              <strong>Solution:</strong> Developed comprehensive Playwright test suite with 
              mock auth servers, credential injection, and parallel test execution support.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Technical Implementation
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Authentication Flow
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• OAuth2 PKCE flow implementation</li>
              <li>• Secure token storage in VS Code secrets API</li>
              <li>• Automatic token refresh on expiration</li>
              <li>• Fallback authentication mechanisms</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Error Handling
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Network failure retry logic</li>
              <li>• Token invalidation detection</li>
              <li>• User-friendly error messages</li>
              <li>• Debugging instrumentation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Stack</h2>
        <div className="flex flex-wrap gap-3">
          {[
            'TypeScript',
            'VS Code Extension API',
            'OAuth2',
            'Playwright',
            'Node.js',
            'MCP Protocol',
            'JWT',
            'REST APIs',
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

      {/* Demo Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Demo</h2>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-12 text-center">
          <p className="text-gray-600 mb-4">Authentication flow demo will be embedded here</p>
          {/* Replace with actual video/screenshots */}
          <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-400">Demo Video/Screenshots Placeholder</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Results & Impact</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-6 text-center bg-white border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-gray-600">Auth Success Rate</p>
          </div>
          <div className="p-6 text-center bg-white border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <p className="text-gray-600">Test Coverage</p>
          </div>
          <div className="p-6 text-center bg-white border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">Zero</div>
            <p className="text-gray-600">Race Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
