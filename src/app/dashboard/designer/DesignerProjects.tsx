"use client";

import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  fileName: string;
  status: string;
}

export default function DesignerProjects() {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: "Brand Logo", description: "Logo for new campaign", fileName: "logo.png", status: "Pending" },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">File</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((proj) => (
            <tr key={proj.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{proj.title}</td>
              <td className="border px-4 py-2">{proj.description}</td>
              <td className="border px-4 py-2">{proj.fileName}</td>
              <td className="border px-4 py-2">{proj.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
