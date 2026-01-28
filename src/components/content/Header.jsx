import { Moon, SunMedium } from "lucide-react";
import React, { useState, useEffect } from "react";
import { navItems } from "../../constants/navigation.constants";
import TextType from "./TextType";

export const Header = ({ setIsDarkMode, isDarkMode }) => {
  const text = "Vaibhav Ch";
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex flex-col gap-6 z-100">
      <div className="flex items-start justify-between gap-6">
        <TextType
          text={["Hi, I'm Vaibhav Ch!", "Software Engineer", "Designing Interfaces"]}
          typingSpeed={75}
          pauseDuration={3000}
          showCursor={true}
          cursorCharacter="_"
          className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl md:text-6xl leading-tight"
        />
        {/* <span className="text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
          {text.split("").map((char, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                opacity: index < displayedText.length ? 1 : 0,
                filter:
                  index < displayedText.length ? "blur(0px)" : "blur(4px)",
                transition: "opacity 0.3s ease, filter 0.3s ease",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span> */}

        <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          className="flex min-w-10 h-10 w-10 cursor-pointer items-center justify-center rounded-full border border border-zinc-200 bg-zinc-50 text-sm text-zinc-700 cursor-pointer transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-500 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
        >
          {!isDarkMode ? <Moon color="#111" /> : <SunMedium color="#fafafa" />}
        </button>
      </div>

      <nav className="text-md font-large text-zinc-800 dark:text-zinc-200">
        {navItems.map((nav, index) => (
          <>
            <a
              className="hover:underline cursor-pointer"
              href={nav.url}
              target="_blank"
            >
              {/* <nav.icon /> */}
              {nav.name}
            </a>

            {index !== navItems.length - 1 && (
              <span className="mx-2 text-zinc-400 dark:text-zinc-600">/</span>
            )}
          </>
        ))}
      </nav>
    </header>
  );
};
