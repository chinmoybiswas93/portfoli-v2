import Link from "next/link";
import React from "react";
import H from "../H";

const Footer = () => {
  return (
    <div>
      <p>
        Inspired from{" "}
        <Link href={"https://brittanychiang.com/"}>Brittany Chiang</Link> and
        coded in <H>Visual Studio Code</H> by yours truly. Built with{" "}
        <H>Next.js</H>
        and <H>Tailwind CSS</H>, deployed with Vercel. All text is set in the
        Inter typeface.
      </p>
    </div>
  );
};

export default Footer;
