import React from "react";

import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../constants/stringConstants";

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-16 border-b-2 border-gray-800 pb-20">
      {PROJECTS.map(({ id, description, title, subtitle, src, ...props }) => (
        <ProjectCard
          key={id}
          title={title}
          subtitle={subtitle}
          description={description}
          src={src}
          {...props}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
