import { getJobs } from "@/lib/api";
import Job from "../Job";

const Jobs = async () => {
  const jobs = await getJobs();
  return (
    <section
      id="jobs"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {jobs.map((job) => (
        <Job key={job.id} id={job.id} />
      ))}
    </section>
  );
};

export default Jobs;
