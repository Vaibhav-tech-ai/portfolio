import React from "react";
import quicketLogo from "../../assets/qs-logo.png";
import fitmedikLogo from "../../assets/fitmedik.png";

const experiences = [
  {
    name: "Quicket Solutions",
    role: "Software Engineer",
    logo: quicketLogo,
    timeline: "Jul 2023-Present",
    type: "Onsite - Full Time",
  },
  {
    name: "Quicket Solutions",
    role: "SWE Intern",
    logo: quicketLogo,
    timeline: "Oct 2022- Jul 2023",
    type: "Onsite - Internship",
  },
  {
    name: "Fitmedik",
    role: "Product Designer",
    logo: fitmedikLogo,
    timeline: "Dec 2021- Jun 2022",
    type: "Remote - Part Time",
  },
];

export const Experiences = () => {
  return (
    <div className="flex flex-col gap-6">
      <span className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
        EXPERIENCES
      </span>

      <div className="flex flex-col gap-6">
        {experiences.map((experience) => (
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  alt="logo"
                  loading="lazy"
                  src={experience.logo}
                  //   width={35}
                  //   className="h-[20px] w-[30px]"
                  className="scale-[0.4]"
                  //   style={{color: "transparent"}}
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="font-normal text-md  truncate text-zinc-950 dark:text-zinc-50">
                  {experience.name}
                </span>
                <span className="font-normal dark:text-zinc-500 truncate text-[14px] text-zinc-800">
                  {experience.role}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-0.5 items-end">
              <div className="shrink-0 pt-0.5 text-[13px] text-zinc-500 dark:text-zinc-500">
                {experience.type}
              </div>
              <span className="shrink-0 pt-0.5 text-[13px] text-zinc-500 dark:text-zinc-500">
                {experience.timeline}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
