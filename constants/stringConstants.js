import tutorImg from "../public/images/tutor.png";
import nourishImg from "../public/images/nourish.png";

const PROJECTS = [
  {
    title: "Nourish nutrition program",
    description: `Nourish is a 3 month online nutrition program created
        and designed by certified nutritionist Mrunmayee
        Dixit. Kiss diet burnout goodbye and get started.`,
    subtitle: "Website Design / UI/UX",
    id: "1",
    src: nourishImg,
  },
  {
    title: "Master Tutor: Mobile App Design",
    description: `Master Tutor is an app where you can hire private tutors in your area without worrying about their qualification and experience.`,
    subtitle: "Mobile App / UI/UX",
    id: "2",
    src: tutorImg,
  },
];

const NAV = [
  {
    id: "1",
    text: "About",
    href: "#About",
  },
  {
    id: "2",
    text: "Contact",
    href: "mailto: designwithsaurabh@gmail.com",
  },
];

const FOOTER_LINKS = [
  {
    id: "1",
    text: "Home",
    href: "#Home",
  },
  {
    id: "2",
    text: "Contact",
    href: "mailto: designwithsaurabh@gmail.com",
  },
  {
    id: "3",
    text: "Linkedin",
    href: "https://www.linkedin.com/in/saurabhchunekar/",
    isExternal: true,
  },
  {
    id: "4",
    text: "Twitter",
    href: "https://twitter.com/SaurabChunekar",
    isExternal: true,
  },
];

const ABOUT_STRINGS = [
  {
    id: "1",
    text: "Hello! I am Saurabh. I am a self-taught product designer from Mumbai, India. I design landing pages, websites and mobile applications.",
  },
  {
    id: "2",
    text: "I have previously worked as a UI/UX design Intern at a design and branding agency from Hyderabad. Before that I worked as a graphic designer at a mass customization company in Mumbai.",
  },
  {
    id: "3",
    text: "I am looking for new and exciting product design opportunities and making new friends while working on some complex problems together.",
  },
  {
    id: "4",
    text: "Other than design, I am passionate about fitness, biochemistry, health and nutrition. Doing workout 4-5 times a week gives me joy and a sense of achievement, also helps me overcome stress and anxiety.",
  },
];

export { PROJECTS, NAV, FOOTER_LINKS, ABOUT_STRINGS };
