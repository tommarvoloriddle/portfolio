"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  
  {
    id: 4,
    title: "Chattr - Chat Room",
    description: "Real-time chat application with rooms and private messaging",
    image: "/images/projects/Chattr.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://drive.google.com/file/d/1LpJTlG7fUGtA-16gdvkbGA3I0sMFGzsm/view?usp=sharing",
  },
  {
    id: 6,
    title: "SLIP: Segmentation Using Text Prompts",
    description: "Paper: Combining text and image prompts for image segmentation",
    image: "/images/projects/SLIP.png",
    tag: ["All", "AI"],
    gitUrl: "/",
    previewUrl: "https://github.com/tommarvoloriddle/SLIP",
  },
  {
    id: 2,
    title: "Taxi Data Analytics for New York City",
    description: "🚖 Enhancing Taxi Services for New York City using Big Data 📊",
    image: "/images/projects/Taxi.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arushi297/Enhancing-Taxi-Services-Through-Big-Data-Analytics-Predictive-Modeling/tree/main",
    previewUrl: "https://drive.google.com/file/d/1RgqfifhoaMTZegTxa05FoXP6XksU_5KI/view",
  },
  {
    id: 3,
    title: "Reverse Image Search Engine",
    description: "Fast and accurate reverse image search engine",
    image: "/images/projects/ImageSimilarity.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tommarvoloriddle/blinkfire-image-similarity",
    previewUrl: "https://github.com/tommarvoloriddle/blinkfire-image-similarity",
  },
  {
    id: 1,
    title: "Vision KAN",
    description: "Python Package: 1500+ downloads 📥 and 150+ ⭐ on GitHub!",
    image: "/images/projects/KAN.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/chenziwenhaoshuai/Vision-KAN",
    previewUrl: "https://github.com/chenziwenhaoshuai/Vision-KAN",
  },
  {
    id: 5,
    title: "Distributed Key-Value Store",
    description: "Distributed key-value store with eventual consistency and fault tolerance",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://github.com/tommarvoloriddle/Distributed-Key-Value-Store",
  },
  {
    id: 7,
    title: "LLM Unlearning",
    description: "Paper: Mitiagting biases and harmful responses in LLMs using unlearning techniques",
    image: "/images/projects/LLMul.png",
    tag: ["All", "AI"],
    gitUrl: "/",
    previewUrl: "https://github.com/shreya1313/llm-unlearning",
  },

  {
    id: 8,
    title: "Autocat: LLM as Recommendation System",
    description: "Paper: Using LLMs as recommendation systems for consumer products",
    image: "/images/projects/LLMrec.png",
    tag: ["All", "AI"],
    gitUrl: "/",
    previewUrl: "https://drive.google.com/file/d/1deF8Slc--7G8ivKrnNPAz26tVum6Aa8t/view",
  },
  {
    id: 9,
    title: "Technozion: Android App",
    description: "Android App for Technozion, NITW's annual technical fest",
    image: "/images/projects/technozion.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
