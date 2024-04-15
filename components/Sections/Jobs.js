import { getJobs } from "@/lib/api";
import Job from "../Job";
import ViewButton from "../ViewButton";

const Jobs = async () => {
  const jobs = await getJobs();
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      {jobs.map((job) => (
        <Job key={job.id} id={job.id} />
      ))}

      <ViewButton
        href={
          "https://chinmoybiswas.com/wp-content/uploads/2024/02/Wordpress-Developer-Resume-Chinmoy-Biswas.pdf"
        }
        target={"_blank"}
      >
        View Full Resume
      </ViewButton>
    </section>
  );
};

export default Jobs;
