"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import QuantChart from "./QuantChart";

const TAB_DATA = [
  {
    title: "Quant",
    id: "quant",
    content: (
      <ul className="list-disc pl-2">
        <li>BESS Co-Optimization (ERCOT, CAISO)</li>
        <li>Stochastic Calculus & Monte Carlo Simulation</li>
        <li>Portfolio Optimization & Delta Hedging</li>
        <li>Power Derivatives & Risk Management</li>
        <li>OTC/Bespoke Trade & Hedge Valuation</li>
        <li>NG Transport Intrinsic/Extrinsic Decomposition</li>
        <li>Linear Programming / QP / MILP</li>
        <li>Retail Energy Valuation (1M+ meters)</li>
      </ul>
    ),
  },
  {
    title: "AI",
    id: "AI",
    content: (
      <ul className="list-disc pl-2">
        <li>PyTorch, TensorFlow</li>
        <li>LLMs, PEFT, LoRA, DPO</li>
        <li>Computer Vision & NLP</li>
        <li>Diffusion Models</li>
        <li>Machine Unlearning</li>
        <li>Zero-Shot Segmentation (SAM + CLIP)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>NYU – MS Computer Engineering, GPA 3.97/4.0 | Dean&apos;s Scholarship $18,000</li>
        <li>NIT Warangal – B.Tech, CGPA 8.38/10</li>
      </ul>
    ),
  },
  {
    title: "Programming",
    id: "programming",
    content: (
      <ul className="list-disc pl-2">
        <li>Python (primary), MATLAB, C++</li>
        <li>TypeScript, React (Next.js), SQL</li>
        <li>AWS (EC2, S3, Lambda, Amplify, Elastic Beanstalk)</li>
        <li>MongoDB, MySQL</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("quant");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <QuantChart />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Quantitative Research Analyst &amp; Developer
            </span>{" "}
            at Scoville Risk Partners, focused on North American Power, Natural Gas, and BESS markets. I build and productionize co-optimized dispatch engines, hedge optimization platforms, and real-time valuation systems — covering 2GW+ of BESS assets across ERCOT and CAISO, and risk-managing retail energy portfolios with 1M+ meters.
            <br /><br />
            My quantitative toolkit spans{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              stochastic calculus, Monte Carlo simulation, convex optimization (LP/QP/MILP)
            </span>
            , power derivatives pricing, delta hedging, and dynamic programming. I hold an MS in Computer Engineering from NYU (GPA 3.97, Dean&apos;s Scholarship) and bring a strong engineering foundation from 3 years as a full-stack SDE at SAP Labs.
          </p>
          <div className="flex flex-row flex-wrap justify-start mt-8 gap-y-2">
            <TabButton
              selectTab={() => handleTabChange("quant")}
              active={tab === "quant"}
            >
              {" "}
              Quant{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("AI")}
              active={tab === "AI"}
            >
              {" "}
              AI{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("programming")}
              active={tab === "programming"}
            >
              {" "}
              Programming{" "}
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
