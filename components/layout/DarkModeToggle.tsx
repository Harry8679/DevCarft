"use client";

import { useTheme } from "next-themes";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="ml-4 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}