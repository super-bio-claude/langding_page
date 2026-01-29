import React from 'react';
import SplineBackground from './components/SplineBackground';
import ServiceCard from './components/ServiceCard';
import { SERVICES, APP_CONFIG } from './constants';

const App: React.FC = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden text-white font-sans selection:bg-brand-500/30">
      {/* 1. Immersive 3D Background */}
      <SplineBackground />


      {/* 3. Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8 w-full max-w-7xl mx-auto">
        
        {/* Header Text Section */}
        <div className="text-center max-w-5xl mb-20 space-y-8">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-brand-500 uppercase bg-brand-900/30 rounded-full border border-brand-500/20 backdrop-blur-sm animate-fade-in">
            {APP_CONFIG.subtitle}
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {APP_CONFIG.heroTitle.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" : ""}>
                    {word}{" "}
                </span>
            ))}
          </h1>

          <p className="text-xl md:text-2xl text-gray-800 whitespace-pre-line leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {APP_CONFIG.heroDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              delay={300 + (index * 150)} 
            />
          ))}
        </div>
      </div>
      
      {/* 4. Vignette Effect for focus - Minimally visible */}
      <div className="absolute inset-0 z-[5] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
    </main>
  );
};

export default App;