import Link from "next/link";
import React from "react";
import { FOOTER_LINKS } from "../constants/stringConstants";

const Footer = () => {
  return (
    <footer>
      <ul className="flex items-center justify-start text-xl font-semibold gap-x-8 py-20">
        {/* <li>Home</li>
        <li>Contact</li>
        <li>Linkedin</li>
        <li>Twitter</li> */}
        {FOOTER_LINKS.map((item) => (
          <li key={item.id}>
            {item.isExternal ? (
              <a href={item.href} target="_blank">
                {item.text}
              </a>
            ) : (
              <Link scroll={false} href={item.href}>
                {item.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
