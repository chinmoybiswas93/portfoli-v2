import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col mt-16">
      <Link className="nav-link active" href={"#about"}>About</Link>
      <Link className="nav-link" href={"#experience"}>Experience</Link>
      <Link className="nav-link" href={"#projects"}>Projects</Link>
    </div>
  );
};

export default Navbar;
