import Link from "next/link";
import React from "react";

const ViewButton = ({ href, children, target }) => {
  return (
    <div className="text-slate-200 font-semibold pt-4 px-4">
      <Link target={target} href={href}>
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="inline-block h-4 w-4 shrink-0 transition-transform hover:-translate-y-1 hover:translate-x-1 focus-visible::-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px hover:cursor-pointer"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default ViewButton;
