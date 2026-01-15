import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CardComp } from "./components/card-band/CardComp";
import { Header } from "./components/content/Header";
import { Experiences } from "./components/content/Experiences";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  ); //0 -> dark, 1-> white

  useEffect(() => {
    // Add or remove the 'dark' class from the <html> element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className={`page h-screen bg-[#f5f5f5] dark:bg-[#09090b]`}>
      <div className="main-page flex flex-col gap-10">
        <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Experiences />
        <div className="absolute top-0 left-60 right-0 h-full overflow-hidden z-50 pointer-events-none hidden md:block">
          <div className="absolute w-full h-full pointer-events-none">
            <CardComp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
