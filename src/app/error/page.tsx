"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white p-6">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-xl text-white/70 mb-6">
        Something went wrong. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()} 
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md font-semibold"
        >
          Retry
        </button>
        <button
          onClick={() => router.push("/")}
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md font-semibold"
        >
          Go Home
        </button>
      </div>
      <p className="mt-6 text-sm text-white/50">{error.message}</p>
    </div>
  );
}
