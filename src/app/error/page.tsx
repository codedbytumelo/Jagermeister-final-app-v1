"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-6">
        Something went wrong. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-orange-400 text-black font-semibold rounded-lg hover:bg-orange-500 transition"
      >
        Try Again
      </button>
      <Link
        href="/"
        className="mt-4 text-orange-400 underline hover:text-orange-500"
      >
        Go Home
      </Link>
    </div>
  );
}
