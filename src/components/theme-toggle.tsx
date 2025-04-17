"use client";
import { useTheme } from "@/src/app/context/theme-context";
import { BsSun } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            className="ml-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border border-solid border-gray-600 bg-yellow-50 text-lg opacity-80 transition-all hover:opacity-100 sm:h-9 sm:w-9 dark:bg-black dark:text-yellow-200 dark:backdrop-blur-lg dark:backdrop-filter"
            onClick={toggleTheme}
        >
            {theme === "light" ? (
                <LuMoonStar className="text-xl text-slate-900 sm:text-xl" />
            ) : (
                <BsSun className="text-xl sm:text-xl" />
            )}
        </button>
    );
};

export default ThemeToggle;
