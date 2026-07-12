import React, { useState, useEffect } from "react";
import LiveWebsite from "./components/LiveWebsite";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return <LiveWebsite theme={theme} toggleTheme={toggleTheme} />;
}
