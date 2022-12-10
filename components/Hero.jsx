import React from "react";

const heroText =
  "Hi! I am Saurabh Chunekar. I am a product designer from Mumbai, India, focused on websites and mobile application design.";

const Hero = () => {
  return (
    <h1 className="font-secondary font-semibold text-5xl mb-24 mt-16 leading-16">
      {heroText}
    </h1>
  );
};

export default Hero;
