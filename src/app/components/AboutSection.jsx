"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Frontend Development",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "backend",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Flask</li>
        <li>ExpressJS</li>
        <li>Node.JS</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "AI",
    id: "AI",
    content: (
      <ul className="list-disc pl-2">
        <li>Pytorch</li>
        <li>Tensorflow</li>
        <li>LLMs</li>
        <li>Computer Vision & NLP</li>
        <li>Deep Learning</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>New York University - Merit Scholarship $18000</li>
        <li>National Insitute of Technology, Warangal - Merit Scholarship INR 80K</li>
      </ul>
    ),
  },
  {
    title: "Cloud",
    id: "cloud",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS S3, ECR, Lambda, Dynamo</li>
        <li>Docker, Kubernetes</li>
        <li>Redis</li>
        <li>Azure CosmosDB</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("AI");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a math enthusiast 🧠 and software engineer 💻 passionate about solving complex problems. 
            In AI research, I specialize in Deep Learning, Computer Vision, Natural Language Processing, and LLMs 🤖, utilizing tools like PyTorch, TensorFlow, ONNX, and JIT 🔍, 
            with a focus on LLM-based recommendation systems. I've also served as a Teaching Assistant for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Prof. Yann LeCun
            </span> 👨‍🏫. On the software development side, I have extensive experience with Python, Flask, ExpressJS, and Node.js 🛠️ for backend development, and React, Next.js, Redux, TypeScript, HTML, and CSS 🌐 for frontend development. Additionally, I have hands-on experience with C/C++ and Assembly for embedded systems 🔧, and Java and XML for Android development 📱. I am a quick learner, always eager to expand my skills 📚, and a team player excited to collaborate and create innovative applications 🚀.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("AI")}
              active={tab === "AI"}
            >
              {" "}
              AI{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              {" "}
              Backend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              {" "}
              Frontend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("cloud")}
              active={tab === "cloud"}
            >
              {" "}
              Infrastructure{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
