"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentActive = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          currentActive = section.id;
        }
      });

      setActiveSection(currentActive);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sm:flex flex-col mt-16 hidden">
      <NavLink href="#about" active={activeSection === "about"}>
        About
      </NavLink>
      <NavLink href="#experience" active={activeSection === "experience"}>
        Experience
      </NavLink>
      <NavLink href="#projects" active={activeSection === "projects"}>
        Projects
      </NavLink>
    </div>
  );
};

const NavLink = ({ href, active, children }) => (
  <Link href={href} className={`nav-link ${active ? "active" : ""}`}>
    {children}
  </Link>
);

export default Navbar;
