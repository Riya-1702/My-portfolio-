import React, { useEffect, useState } from 'react';

const PreLoader: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // This effect ensures the initial text and spinner appear
    setShow(true);

    // In a real application, you'd integrate this with your actual loading logic.
    // For example, once all your main app components/data are fetched, you'd hide this preloader.
    // setTimeout(() => { /* Your logic to hide preloader and show main app content */ }, 2000);

  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Line Loading Icon */}
      <div
        className={`w-32 h-2 bg-gray-200 rounded-full overflow-hidden mb-4 transition-opacity duration-400 ease-out ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="line-loader-progress w-full h-full bg-blue-500 rounded-full"></div>
      </div>

      {/* Greeting Text */}
      <div
        className={`text-center transition-all duration-400 ease-out ${
          show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <span className="block text-slate-600 text-base">Welcome to</span>
        <span className="block text-slate-800 font-bold text-2xl mt-1">
          Riya's Portfolio
        </span>
      </div>

      {/* Custom CSS for the line loader animation */}
      <style>{`
        @keyframes lineProgress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .line-loader-progress {
          animation: lineProgress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PreLoader;