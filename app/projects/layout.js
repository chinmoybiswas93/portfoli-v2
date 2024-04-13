import Link from "next/link";

export default function ProjectsLayout({ children }) {
  return (
    <div className="flex flex-row">
      <Link href={"/"}>Home</Link>
      <div>Project Layout Sidebar</div>
      <div>{children}</div>
    </div>
  );
}
