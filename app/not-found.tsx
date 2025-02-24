import Link from "next/link";
import React from "react";
// import { ExclamationCircleIcon } from "@heroicons/react/24/solid"; // Heroicon

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      {/* <Image
        src={"/notFound_image.jpg"}
        alt="not-found-image"
        width={800}
        height={800}
        className="object-cover"
      /> */}
      {/* Icon */}
      {/* <ExclamationCircleIcon
        className="h-24 w-24 text-red-500 mb-4"
        aria-hidden="true"
      /> */}

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>

      {/* Description */}
      <p className="text-lg text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Back to Home Button */}
      <Link
        className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 transition-colors"
        href={"/v2/home"}
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
