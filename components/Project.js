import { getPostFeaturedImage } from "@/lib/api";
import Image from "next/image";
import he from "he";
import HtmlToText from "./HtmlToText";
import Link from "next/link";

const Project = async ({ project }) => {
  const { guid } = await getPostFeaturedImage(project.id);
  const { rendered: featured_image } = guid;
  return (
    <div
      className="grid grid-cols-8 gap-6 sm:hover:bg-slate-800 hover:cursor-pointer sm:p-4 rounded-md sm:mb-4 mb-12"
      key={project.id}
    >
      <div className="relative sm:col-span-3 col-span-8">
        <Link
          target="_blank"
          className="flex items-center"
          href={project.acf.live_site}
        >
          <Image
            src={featured_image}
            className="rounded border border-slate-200"
            alt="Featured Image"
            width={200}
            height={150}
            style={{
              objectFit: "cover",
              height: "120px",
              objectPosition: "top center",
            }}
          />
        </Link>
      </div>
      <div className="sm:col-span-5 col-span-8">
        <div>
          <Link
            target="_blank"
            className="flex items-center mb-1 sm:mb-0"
            href={project.acf.live_site}
          >
            <h2 className="text-lg text-slate-200 font-semibold">
              {he.decode(project.title.rendered)}
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform hover:-translate-y-1 hover:translate-x-1 focus-visible::-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px hover:cursor-pointer"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="text-base">
          <p>{project.acf.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
