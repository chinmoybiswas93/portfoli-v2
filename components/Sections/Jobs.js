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
