import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-16 border-b-2 border-gray-800 pb-20">
      <ProjectCard title="Nourish nutrition program" />
      <ProjectCard title="Flourish nutrition program" />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectGrid;
