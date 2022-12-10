import Link from "next/link";
import React from "react";

const CLASSNAME =
  "bg-rose-600 py-2 px-8 rounded-full max-w-max font-primary hover:-translate-y-1 transition-transform duration-300 ease-in-out";

const Button = ({ children, linkData = {} }) => {
  return linkData.isLink ? (
    <Link href={linkData.href} className={CLASSNAME}>
      {children}
    </Link>
  ) : (
    <button className={CLASSNAME}>{children}</button>
  );
};

export default Button;
