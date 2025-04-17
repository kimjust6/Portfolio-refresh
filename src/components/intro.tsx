/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/src/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsDownload, BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";

const Intro = () => {
    const router = useRouter();
    return (
        <section id="home" className="scroll-m-28">
            <div className="flex items-center justify-center">
                <Image
                    className="mt-24 rounded-xl border-4 border-zinc-100 shadow-sm shadow-zinc-800 sm:mt-36"
                    src="https://i.imgur.com/R4NkK6G.jpg"
                    width={200}
                    height={300}
                    alt="head shot"
                ></Image>
            </div>
            <div className="flex w-full justify-center">
                <div className="max-w-xs text-center sm:max-w-2xl">
                    <p className="my-10 font-sans text-2xl sm:text-3xl">
                        I'm{" "}
                        <span className="font-bold dark:text-yellow-400">
                            Justin
                        </span>
                        , a{" "}
                        <span className="font-bold dark:text-yellow-400">
                            Full Stack Developer{" "}
                        </span>{" "}
                        who is{" "}
                        <span className="italic dark:text-yellow-100">
                            passionate
                        </span>{" "}
                        about creating modern{" "}
                        <span className="italic dark:text-yellow-100">
                            user centered{" "}
                        </span>{" "}
                        web applications.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-3 sm:min-w-96 sm:flex-row sm:gap-4">
                        <button
                            className="button_secondary group"
                            onClick={() => {
                                router.push("#contact");
                                // setActiveSection("Contact");
                            }}
                        >
                            Contact Me{" "}
                            <BsEnvelope className="transition-all group-hover:translate-x-0.5" />
                        </button>
                        <a
                            href="/Justin Kim Resume 2023.pdf"
                            download
                            className="button_primary group"
                        >
                            Download CV{" "}
                            <BsDownload className="transition-all group-hover:translate-y-0.5" />
                        </a>
                        <Link
                            href="https://www.linkedin.com/in/justin-kim6/"
                            target="_blank"
                        >
                            <div className="button_secondary">
                                <span className="display">LinkedIn</span>
                                <BsLinkedin
                                    size={20}
                                    className="text-blue-800 dark:text-blue-500"
                                />
                            </div>
                        </Link>
                        <Link
                            href="https://github.com/kimjust6"
                            target="_blank"
                        >
                            <div className="button_secondary">
                                <span className="display">GitHub</span>
                                <BsGithub size={20} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
