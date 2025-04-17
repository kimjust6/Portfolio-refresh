"use client";
import About from "@/src/components/about";
import Contact from "@/src/components/contact";
import Education from "@/src/components/education";
import Experience from "@/src/components/experience";
import Intro from "@/src/components/intro";
import Projects from "@/src/components/projects";
import Skills from "@/src/components/skills";
import Divider from "@/src/components/shared/divider";

export default function Home() {
    return (
        <main className="">
            <Intro />
            <Divider />
            <About />
            <Divider />
            <Experience />
            <Divider />
            <Education />
            <Divider />
            <Skills />
            <Divider />
            <Projects />
            <Divider />
            <Contact />
        </main>
    );
}
