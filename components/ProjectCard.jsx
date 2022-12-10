import Image from "next/image";
import React from "react";

const ProjectCard = ({ title, description, subtitle, src }) => {
  return (
    <div className="flex flex-col rounded-lg w-full overflow-hidden hover:-translate-y-4 transition-transform duration-300 ease-in-out">
      <div className="w-full h-auto">
        <Image
          src={src}
          alt={`${title} cover image`}
          width="100%"
          height="100%"
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col gap-y-4 bg-darkGray w-full p-12 flex-grow">
        <p className="font-secondary text-3xl font-medium">{title}</p>
        <p className="font-primary flex-grow">{description}</p>
        <p className="font-primary text-cardTag">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
