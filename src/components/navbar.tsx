"use client";

import { links } from "@/src/lib/data";
import clsx from "clsx";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useState } from "react";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState("Home");
    // const { activeSection, setActiveSection, setTimeOfLastClick } =
    //     useActiveSection();

    // });

    return (
        <nav className="flex w-screen flex-row justify-center">
            <div className="bg-opacity-95 sm:bg-opacity-80 fixed z-100 flex w-screen flex-wrap items-center justify-center rounded-md border bg-amber-200 bg-clip-padding px-4 py-1 text-lg opacity-95 shadow-md shadow-gray-300 backdrop-blur-lg backdrop-filter sm:mt-6 sm:w-fit sm:border-amber-300 sm:py-2 sm:shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:shadow-none">
                <span className="mr-4 sm:hidden">
                    <ThemeToggle />
                </span>
                {links.map((link) => {
                    return (
                        <li
                            key={link.name}
                            className="relative flex items-center justify-center"
                        >
                            <Link
                                href={link.hash}
                                data-text={link.name}
                                className={clsx(
                                    "my_navbar text-zinc-9500 data-text-title mx-2 py-1 text-gray-700 opacity-100 transition-all select-none hover:font-semibold hover:text-gray-950 dark:text-gray-50",
                                    {
                                        "font-semibold text-gray-950":
                                            activeSection === link.name,
                                    }
                                )}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    // const time = Date.now();
                                    // setTimeOfLastClick(time);
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <div className="absolute inset-0 -z-10 rounded-lg border border-gray-600 bg-amber-100 dark:bg-gray-900 dark:text-yellow-200"></div>
                                )}
                            </Link>
                        </li>
                    );
                })}
                <span className="hidden sm:flex">
                    <ThemeToggle />
                </span>
            </div>
        </nav>
    );
};

export default Navigation;
