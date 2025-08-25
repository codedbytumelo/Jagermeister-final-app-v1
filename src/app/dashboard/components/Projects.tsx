"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { PlusCircle, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    { title: "Streetwear Collection", status: "Submitted" },
    { title: "Formal Wear Line", status: "In Progress" },
    { title: "Summer Casual", status: "Draft" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#D2F34C]">Projects</h1>
        <button className="flex items-center gap-2 bg-[#3C8968] hover:bg-[#244034] text-white px-4 py-2 rounded-md">
          <PlusCircle size={20} /> Create New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <Card key={idx} className="p-4 bg-[#3F634D] text-white flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Folder size={20} />
              <h2 className="font-semibold">{project.title}</h2>
            </div>
            <p className="text-sm text-gray-200">Status: {project.status}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
