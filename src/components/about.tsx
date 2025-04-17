/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="text-md mx-6 flex scroll-m-28 flex-col items-center justify-center"
        >
            <div className="mb-4">
                <Head>ABOUT ME</Head>
            </div>

            <p className="text-md mt-2 max-w-md text-center sm:mt-4 sm:max-w-3xl">
                My name is Justin and I'm a full stack developer who is
                passionate about learning and solving problems.
            </p>
            <p className="text-md mt-2 max-w-md text-center sm:mt-4 sm:max-w-3xl">
                Aside from programming, I enjoy rock climbing/bouldering and
                watching films. Have a look around to learn about me and see
                what projects I have been working on!
            </p>
        </section>
    );
};

export default About;
