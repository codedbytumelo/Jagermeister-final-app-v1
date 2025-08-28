"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function DOBPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isFading, setIsFading] = useState(false);

  const validateDOB = (dobValue: string) => {
    if (!dobValue) {
      setError("Please enter your date of birth");
      return false;
    }

    const birthDate = new Date(dobValue);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    if (age < 18) {
      setError("Sorry, you must be 18 or older to enter.");
      return false;
    }

    return true;
  };

  const handleDOBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dobValue = e.target.value;
    setError(""); // reset previous errors

    if (dobValue && validateDOB(dobValue)) {
      setIsFading(true);
      setTimeout(() => {
        router.push("/shop"); // redirect to shop homepage
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      {!isFading && (
        <motion.div
          className="flex flex-col items-center justify-center min-h-screen bg-orange-100 text-center px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold mb-8 text-[#244034]">
            Enter Your Date of Birth
          </h1>

          <input
            type="date"
            onChange={handleDOBChange}
            className="text-2xl p-4 rounded-lg border-4 border-[#244034] text-center max-w-xs w-full shadow-lg"
            autoFocus
          />

          {error && (
            <p className="text-red-600 text-lg mt-4 font-semibold">{error}</p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
