import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className='absolute inset-0 overflow-hidden z-0 opacity-40'>
      <div className='absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob'></div>
      <div className='absolute top-0 -right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000'></div>
      <div className='absolute -bottom-40 left-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000'></div>
      <div className='absolute -bottom-40 right-20 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-6000'></div>
    </div>
  );
};

export default AnimatedBackground;
