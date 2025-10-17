import { useEffect, useState } from "react";

function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScroll((scrolled / height) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-blue-500 z-50 transition-all duration-200"
      style={{ width: `${scroll}%` }}
    ></div>
  );
}

export default ScrollProgressBar;
