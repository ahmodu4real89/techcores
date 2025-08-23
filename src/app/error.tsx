'use client';

import { FaExclamationCircle } from 'react-icons/fa';

type ErrorProps = {
  message?: string;
};

const ErrorPage = ({ message = "Something went wrong!" }: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[200px] bg-red-50 rounded-xl p-8">
      <FaExclamationCircle className="text-red-600 text-6xl mb-4" />
      <h1 className="text-2xl font-bold text-red-700 mb-2">Error</h1>
      <p className="text-red-600 text-center">{message}</p>
    </div>
  );
};

export default ErrorPage;
