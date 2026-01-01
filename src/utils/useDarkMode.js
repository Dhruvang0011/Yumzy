import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!localStorage.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark"); // ✅ HERE
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark"); // ✅ HERE
      localStorage.theme = "light";
    }
  }, [dark]);

  return [dark, setDark];
};

export default useDarkMode;
