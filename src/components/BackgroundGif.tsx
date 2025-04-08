import React from 'react';


interface BackgroundGifProps {
  opacity?: number;
}

const BackgroundGif: React.FC<BackgroundGifProps> = ({ opacity = 0.15 }) => {
  return (
    <div 
      className="fixed inset-0 w-full h-full z-0 bg-repeat"
      style={{
        backgroundImage: 'url("/noice.gif")',
        backgroundSize: '400px 400px', // Adjust size as needed
        opacity: opacity,
      }}
    >
      {/* Add an overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-white" style={{ opacity: 0.8 }}></div>
    </div>
  );
};

export default BackgroundGif;