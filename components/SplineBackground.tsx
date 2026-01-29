import React, { useState } from "react";

const SplineBackground: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-black">
      {/* Loading State Placeholder */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* 
        Overlay to darken the background slightly for better text readability.
        Pointer events are passed through so user can interact with 3D model if needed.
        Adjusted opacity to be very light (5% top, 20% bottom) as per 'weaker' request.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20 z-[1] pointer-events-none" />

      <iframe
        src="https://my.spline.design/dnaparticles-OoosEyvcaQ10rSkQorunOlVX/"
        frameBorder="0"
        className="w-full h-full object-cover scale-[1.9] origin-center"
        onLoad={() => setIsLoading(false)}
        title="Spline 3D Background"
      ></iframe>
    </div>
  );
};

export default SplineBackground;
