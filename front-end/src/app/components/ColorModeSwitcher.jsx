"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "phosphor-react";
import { Button } from "./Button";

export const ColorModeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button onClick={toggleTheme} isIcon={true}>
      {theme === "light" ? (
        <Moon size={20} weight="bold" />
      ) : (
        <Sun size={20} weight="bold" />
      )}
    </Button>
  );
};