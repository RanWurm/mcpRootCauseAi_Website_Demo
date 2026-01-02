'use client';
import { useState, useEffect } from 'react';


export default function RootCauseAIPresentationPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
      const checkFullscreen = () => {
        const chromeHeight = window.outerHeight - window.innerHeight;
        const isFs = chromeHeight < 50 && window.innerHeight >= screen.height - 50;
        setIsFullscreen(isFs);
      };

      window.addEventListener('resize', checkFullscreen);
      return () => window.removeEventListener('resize', checkFullscreen);
    }, []);
  return (
    <div className="w-full h-screen flex flex-col">
      {!isFullscreen && (
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Root-Cause AI - Technical Presentation</h1>
        <p className="text-gray-600 mt-1">Multi-Agent System for Automated Bug Detection</p>
      </div>
      )}
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
