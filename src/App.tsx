import { useEffect, useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import Top from "./components/top";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-[linear-gradient(90deg,var(--tw-gradient-stops))] from-[#ffedde_74%] via-[#ffedde_13%] to-[#fe043c_13%]">
      <Header isTopOfPage={isTopOfPage} />
      <Home />
      <Top />
    </div>
  );
}

export default App;
