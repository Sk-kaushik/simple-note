import React from "react";

// 404 PAGE
const NotFound = () => {
  return (
    <div className="flex flex-col text-center justify-center h-4/6 items-center">
      <span className="text-8xl font-bold text-red-500 mb-5"> Oops !</span>
      <span className="divide-x-4"></span>
      <span className="text-3xl font-semibold mt-3 mb-2">404 - Page not found</span>
      <span className="w-full ">
        <p className="w-2/5 mx-auto ">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
      </span>
    </div>
  );
};

export default NotFound;
