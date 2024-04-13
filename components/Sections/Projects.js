import { getPosts } from "@/lib/api";
import Project from "../Project";
import ViewButton from "../ViewButton";

const Projects = async () => {
  const projects = await getPosts(4);
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {projects.map((project, index) => (
        <Project key={project.id} project={project}></Project>
      ))}

      <ViewButton href={"/projects"} target="_self">View Projects Archive</ViewButton>
    </section>
  );
};

export default Projects;
