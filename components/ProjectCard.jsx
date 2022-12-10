import Image from "next/image";
import React from "react";

import NourishImg from "../public/images/nourish.png";

const ProjectCard = ({ title = "Nourish nutrition program" }) => {
  return (
    <div className="flex-col rounded-lg w-full overflow-hidden hover:-translate-y-4 transition-transform duration-300 ease-in-out">
      <div className="w-full h-auto">
        <Image
          src={NourishImg}
          alt="Logo for the portfolio"
          width="100%"
          height="100%"
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col gap-y-4 bg-darkGray w-full p-12">
        <p className="font-secondary text-2xl font-medium">{title}</p>
        <p className="font-primary">
          Nourish is a 3 month online nutrition program created and designed by
          certified nutritionist Mrunmayee Dixit. Kiss diet burnout goodbye and
          get started.
        </p>
        <p className="font-primary text-cardTag">Website Design / UI/UX</p>
      </div>
    </div>
  );
};

export default ProjectCard;
