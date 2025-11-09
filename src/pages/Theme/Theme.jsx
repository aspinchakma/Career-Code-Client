import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-0 text-3xl font-bold rounded-lg cursor-pointer"
    >
      {theme === "light" ? <CiDark /> : <CiLight />}
    </button>
  );
};

export default Theme;
