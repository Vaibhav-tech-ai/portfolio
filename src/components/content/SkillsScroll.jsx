import React from "react";

export default function SkillsScroll() {
  // Skills with actual tech stack logos from CDN
  const skills = [
    {
      name: "Linux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      color: "from-gray-700/20 to-gray-900/30",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "from-orange-500/20 to-red-600/30",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "from-purple-500/20 to-pink-600/30",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "from-gray-700/20 to-gray-900/30",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-blue-500/20 to-blue-600/30",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "from-blue-400/20 to-yellow-500/30",
    },
    {
      name: "FastAPI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      color: "from-teal-500/20 to-teal-600/30",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      color: "from-orange-500/20 to-orange-600/30",
    },
    {
      name: "Tanstack Query",
      logo: "https://tanstack.com/images/logos/logo-color-600.png",
      color: "from-blue-500/20 to-blue-600/30",
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "from-gray-600/20 to-gray-700/30",
    },

    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-emerald-500/20 to-emerald-600/30",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "from-blue-500/20 to-blue-600/30",
    },

    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "from-green-500/20 to-emerald-600/30",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "from-blue-500/20 to-blue-700/30",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-500/20 to-yellow-600/30",
    },
    {
      name: "HTML 5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "from-orange-500/20 to-red-600/30",
    },
    {
      name: "MUI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      color: "from-blue-600/20 to-blue-700/30",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "from-blue-400/20 to-blue-500/30",
    },
    {
      name: "Redux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      color: "from-purple-500/20 to-purple-600/30",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      color: "from-blue-600/20 to-indigo-700/30",
    },
  ];

  // Duplicate skills for seamless infinite scroll (two copies back-to-back)
  const scrollSkills = [...skills, ...skills];
  const scrollSkillsReverse = [...scrollSkills].reverse();

  return (
    <div className="mt-142 overflow-hidden transition-colors duration-10">
      <div className="w-full max-w-7xl">
        {/* Title */}

        {/* First Row - Left Scroll */}
        <div className="relative mb-4   pt-2 overflow-hidden fade-edges">
          <div className="flex gap-4 scroll-container w-max">
            {scrollSkills.map((skill, index) => (
              <div
                key={`row1-${index}`}
                className={`skill-pill flex-shrink-0 px-4 py-2 rounded-xl backdrop-blur-sm bg-gradient-to-br ${skill.color} shadow-lg flex items-center gap-3 min-w-fit transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-blue-500/70 dark:hover:border-blue-500/50 hover:shadow-xl`}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-4 h-4 object-contain dark:[filter:brightness(0.9)]"
                />
                <span
                  className="text-gray-800 dark:text-gray-200 font-medium text-md whitespace-nowrap"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right Scroll */}
        <div className="relative  pt-2 overflow-hidden fade-edges">
          <div className="flex gap-4 scroll-container-reverse w-max">
            {scrollSkillsReverse.map((skill, index) => (
              <div
                key={`row2-${index}`}
                className={`skill-pill flex-shrink-0 px-4 py-2 rounded-xl backdrop-blur-sm bg-gradient-to-br ${skill.color} shadow-lg flex items-center gap-3 min-w-fit transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-blue-500/70 dark:hover:border-blue-500/50 hover:shadow-xl`}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-4 h-4 object-contain dark:[filter:brightness(0.9)]"
                />
                <span
                  className="text-gray-800 dark:text-gray-200 font-medium text-md whitespace-nowrap"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
