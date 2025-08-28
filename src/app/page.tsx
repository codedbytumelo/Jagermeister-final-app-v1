"use client";

import { useState, useEffect } from "react";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Guide from "@/sections/Guide";
import DesignerProfiles from "@/sections/DesignerProfiles";
import DesignBrief from "@/sections/DesignBrief";
import Faqs from "@/sections/Faqs";
import Sponsors from "@/sections/Sponsors";
import Footer from "@/sections/Footer";

function AgeGate({ onVerified }: { onVerified: () => void }) {
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dob) {
      setError("Please enter your date of birth");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 18) {
      localStorage.setItem("ageVerified", "true");
      onVerified();
    } else {
      setError("Sorry, you must be at least 18 to enter.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#244034] text-white">
      <div className="max-w-md w-full bg-[#3f634d] p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcome to the Jägermeister Design Competition
        </h1>
        <p className="text-center mb-6">Please verify your age to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#d2f34c]"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#d2f34c] text-[#244034] py-2 rounded-lg font-semibold hover:bg-[#c0e242] transition"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Home() {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem("ageVerified") === "true";
    setVerified(isVerified);
  }, []);

  if (!verified) {
    return <AgeGate onVerified={() => setVerified(true)} />;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <Guide />
      <DesignerProfiles />
      <DesignBrief />
      <Faqs />
      <Footer />
    </div>
  );
}
