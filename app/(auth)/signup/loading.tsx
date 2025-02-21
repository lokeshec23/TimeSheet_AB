import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white-900">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white-900"></div>
    </div>
  );
};

export default LoadingPage;
