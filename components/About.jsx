import Image from "next/image";
import React from "react";
import { ABOUT_STRINGS } from "../constants/stringConstants";

import aboutImg from "../public/images/about-image.png";
import Button from "./Button";

const About = () => {
  return (
    <div id="About" className="mt-24 pb-10 border-b-2 border-gray-800">
      <div className="flex my-8 gap-x-16 justify-between">
        <div className="flex flex-col gap-y-8 max-w-xl">
          <p className="text-5xl font-semibold font-secondary">
            Thanks for stopping by!
          </p>
          {ABOUT_STRINGS.map((item) => (
            <p key={item.id} className="tracking-wide">
              {item.text}
            </p>
          ))}
          <p>Want to work together or just want to say hi?</p>
          <Button
            linkData={{
              href: "mailto: designwithsaurabh@gmail.com",
              isLink: true,
            }}
          >
            Contact Me!
          </Button>
        </div>

        {/* <div className="shrink-0 w-2/5">
          <Image
            src={aboutImg}
            alt="A candid picture of saurabh"
            className="max-w-full h-auto"
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;
