import React, { useEffect } from 'react';
import './App.css';
import './index.css';
import ballgame from './assets/royalty-free-images/ballgame.jpg';

function App() {
  useEffect(() => {
    // Add the script tag dynamically
    const script = document.createElement('script');
    script.src = 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_US';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <header className="container mx-auto px-4 py-16">
        {/* Baseball Card Image */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-white p-4 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" 
               style={{
                 border: '15px solid white',
                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 0 0 2px #e2e8f0'
               }}>
            <img
              src={ballgame}
              alt="Baseball Game"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        {/* Search widget */}
        <gen-search-widget
          configId={process.env.REACT_APP_CONFIG_ID}
          triggerId={process.env.REACT_APP_TRIGGER_ID}>
        </gen-search-widget>

        {/* Enhanced search trigger input */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input 
              placeholder="Search MLB statistics and information..."
              id="searchWidgetTrigger"
              className="w-full px-6 py-4 text-lg rounded-full border-2 border-blue-500 
                         focus:border-blue-600 focus:outline-none focus:ring-2 
                         focus:ring-blue-400 focus:ring-opacity-50 
                         shadow-lg transform transition-all duration-300 
                         hover:-translate-y-0.5 hover:shadow-xl
                         bg-white/90"
            />
            <div className="mt-3 text-sm text-gray-300 text-center">
              Click to search using AI-powered search
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
