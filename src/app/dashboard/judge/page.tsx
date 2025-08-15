"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function JudgeDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch current session/user
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login"); // Redirect if not logged in
      } else {
        setUser(session.user);
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white text-xl">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen bg-neutral-900 text-white">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Judge Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold"
        >
          Logout
        </button>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Welcome, {user?.email}</h2>
        <p className="text-white/70 mb-6">
          Here you can review submissions from designers and score them.
        </p>

        {/* Example submissions table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-neutral-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-700 text-left">
                <th className="px-6 py-3">Designer</th>
                <th className="px-6 py-3">Project</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="px-6 py-4">Jane Doe</td>
                <td className="px-6 py-4">Eco Bottle Design</td>
                <td className="px-6 py-4">Submitted</td>
                <td className="px-6 py-4">
                  <button className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded-md">
                    Review
                  </button>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-6 py-4">John Smith</td>
                <td className="px-6 py-4">Smart Mug Concept</td>
                <td className="px-6 py-4">Submitted</td>
                <td className="px-6 py-4">
                  <button className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded-md">
                    Review
                  </button>
                </td>
              </tr>
              {/* Add more rows dynamically from DB later */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
