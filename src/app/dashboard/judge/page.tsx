"use client";

import { useState, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  designer: string;
  status: string;
}

export default function JudgeDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Replace this with your actual fetch from Supabase or API
    const fetchProjects = async () => {
      const data = [
        { id: "1", title: "Design A", designer: "Alice", status: "Pending" },
        { id: "2", title: "Design B", designer: "Bob", status: "Reviewed" },
      ];
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Judge Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-white/10">
          <thead className="bg-neutral-800">
            <tr>
              <th className="p-4 text-left">Project</th>
              <th className="p-4 text-left">Designer</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t border-white/10">
                <td className="p-4">{project.title}</td>
                <td className="p-4">{project.designer}</td>
                <td className="p-4">{project.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
