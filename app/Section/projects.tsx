"use client";

import Image from "next/image";
import Section from "../UI/section";
import React, { useEffect, useRef, useState } from "react";
import { alegreya } from "../UI/font";
import { member_avatar } from "./member_avatars";
import project_data from "@/app/Data/projects.json";
import styles from "@/styles/project.module.css";
import { Tab, Tabs } from "./tab";
import Tooltip from "../UI/tooltip";

interface ProjectDataType {
  name: string;
  description: string;
  area: string[];
  people: { name: string; key: string }[];
  openings?: { title: string; description: string };
}

const project_areas = [
  "All",
  ...Array.from(
    new Set(project_data.flatMap((project) => project.area))
  ).sort(),
];

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectDataType>(
  (props, ref) => {
    const { name, description, people, openings } = props;

    return (
      <div ref={ref} className={styles.project_card}>
        <h6 className={styles.project_title}>{name}</h6>
        <p style={{ fontSize: "1.2rem", marginTop: "0.6rem" }}>{description}</p>
        <div className={styles.member_container}>
          {people.map(({ key, name }) => (
            <div key={key} className={styles.member_item}>
              {member_avatar[key]}{" "}
              <span style={{ marginLeft: "0.4rem" }}>{name}</span>
            </div>
          ))}
          {openings && (
            <div className={styles.member_item}>
              <Tooltip
                title={openings.description}
                className={styles.jd_container}
              >
                <Image
                  src="/double_check.svg"
                  alt="openings icon"
                  width={20}
                  height={20}
                />
                <span style={{ marginLeft: "0.4rem" }}>{openings.title}</span>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default function Projects() {
  const [filterArea, setFilterArea] = useState("All");
  const [columnHeight, setColumnHeight] = useState<number | undefined>(0);
  const projectCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredProjects = project_data.filter((project) => {
    if (filterArea !== "All") {
      if (!project.area.includes(filterArea)) return false;
    }
    return true;
  });

  const calculateColumnHeight = () => {
    if (window.innerWidth < 576) {
      setColumnHeight(undefined);
      return;
    }
    if (projectCardRefs.current.length === 0) return;
    const heights = projectCardRefs.current
      .map((el) => el?.offsetHeight)
      .filter(Boolean);
    const halfLength = Math.ceil(heights.length / 2);
    setColumnHeight(
      Math.max(
        heights
          .slice(0, halfLength)
          .reduce((acc, cur) => (acc || 0) + (cur || 0), 0) || 0,
        heights
          .slice(halfLength)
          .reduce((acc, cur) => (acc || 0) + (cur || 0), 0) || 0
      )
    );
  };

  useEffect(() => {
    calculateColumnHeight();
    window.addEventListener("resize", calculateColumnHeight);
    return () => window.removeEventListener("resize", calculateColumnHeight);
  }, [filteredProjects]);

  return (
    <Section
      id="project"
      title="ace projects"
      icon={<Image src="/ace.svg" alt="project logo" width={30} height={30} />}
      className={alegreya.className}
    >
      <Tabs value={filterArea} onChange={setFilterArea}>
        {project_areas.map((area: string) => (
          <Tab key={area} value={area}>
            {area}
          </Tab>
        ))}
      </Tabs>
      <div
        className={styles.project_container}
        style={{ maxHeight: columnHeight && columnHeight + 3 }}
      >
        {/* the plus 3 is necessary for firefox */}
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.name}
            {...project}
            ref={(el) => (projectCardRefs.current[idx] = el)}
          />
        ))}
      </div>
    </Section>
  );
}
