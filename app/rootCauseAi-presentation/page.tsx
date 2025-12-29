export default function RootCauseAIPresentationPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Root-Cause AI - Technical Presentation</h1>
        <p className="text-gray-600 mt-1">Multi-Agent System for Automated Bug Detection</p>
      </div>
      <div className="flex-1">
        <iframe
          src="/rootCauseAi-presentation/index.html"
          className="w-full h-full border-0"
          title="Root-Cause AI Presentation"
          allowFullScreen
        />
      </div>
    </div>
  );
}
