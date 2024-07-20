"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Saaketh",
                1000,
                "AI Resaercher",
                1000,
                "Software Engineer",
                1000,
                "Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg">
          🎓  <Link target="_blank" rel="noopener noreferrer" href={'https://www.nyu.edu/'} className="text-primary-500">NYU</Link> Grad | 📊 1 Year AI Research @  
          <Link target="_blank" rel="noopener noreferrer" href={'https://chinmayhegde.github.io/lab/'} className="text-primary-500"> Data Intelligence Lab</Link> | 
          💻 3 Years SDE @  <Link target="_blank" rel="noopener noreferrer" href={'https://www.sap.com/index.html'} className="text-primary-500">SAP</Link> | 
          TA @ <Link target="_blank" rel="noopener noreferrer" href={'https://ai.meta.com/people/396469589677838/yann-lecun/'} className="text-primary-500">Yann LeCun</Link>
          </p>
          <div>
            {/* <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link> */}
            {/* <Link
              target="_blank" rel="noopener noreferrer"
              href="https://www.linkedin.com/in/saaketh-koundinya-24190073/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Connect with me
            </Link> */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tommarvoloriddle"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              <span className="flex items-center bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <FaGithub className="mr-2" />
                GitHub
              </span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/saaketh-koundinya-24190073/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              <span className="flex items-center bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <FaLinkedin className="mr-2" />
                LinkedIn
              </span>
            </Link>
            <Link
              target="_blank" rel="noopener noreferrer"
              href="/docs/saakethk_gundavarapuSoftware.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              <span className="flex item-center bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
          <Image
            src="/images/saaketh_hero1.jpg"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            width={400}
            height={400}
          />
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
