import { getJobByID } from "@/lib/api";
import Link from "next/link";

const Job = async ({ id }) => {
  const job = await getJobByID(id);
  const { projects, tools } = job.acf;

  const formatDate = (dateString) => {
    // Split the date string into parts
    const parts = dateString.split(" ");

    // Get the month abbreviation
    const monthAbbreviation = parts[0].substring(0, 3);

    // Concatenate the month abbreviation and year
    const formattedDate = `${monthAbbreviation} ${parts[1]}`;

    return formattedDate;
  };

  return (
    <>
      <div className="grid grid-cols-8 gap-4 hover:bg-slate-800 p-4 rounded-md mb-4">
        <div className="flex content-start col-span-2 flex-wrap mt-1">
          <span>{formatDate(job?.acf?.start_date)}</span> {" - "}
          <span>
            {job?.acf?.end_date ? formatDate(job?.acf?.end_date) : "Present"}
          </span>
        </div>
        <div className="col-span-6">
          {" "}
          <p className="font-semibold text-lg text-slate-200">
            {job?.title?.rendered} @{" "}
            <Link href={job.acf.url}>{job?.acf?.company}</Link>{" "}
          </p>
          <p>{job?.acf?.description}</p>
          <div>
            <ul className="flex gap-2 my-2">
              {projects.map((project, index) => (
                <Link className="block" href={project?.url} key={index}>
                  <li className="flex align-middle items-center font-semibold text-sm hover:text-slate-50 text-slate-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mr-1 h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                    </svg>
                    {project.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex gap-2 flex-wrap">
              {tools.map((tool, index) => (
                <li
                  className="bg-slate-700 py-[3px] px-3 rounded-full text-sm"
                  key={index}
                >
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
