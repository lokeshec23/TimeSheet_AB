import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-2 px-2 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-2">
        <p className="text-sm font-medium text-gray-400">
          &copy; {new Date().getFullYear()} - All rights reserved
        </p>
        {/* <p className="text-lg font-bold text-white">Analytic Brains</p> */}
      </div>
    </footer>
  );
};

export default Footer;
