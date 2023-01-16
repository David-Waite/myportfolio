import styles from "../styles/projects.module.css";
import { useState } from "react";
import { createClient } from "contentful";
import Link from "next/link";

export default function About({ projects }) {
  console.log(projects[1].fields.madeWith);
  const projectCardsElement = projects.map((item) => {
    const madewith = item.fields.madeWith.map((madewith) => (
      <li key={item.sys.key}>{madewith}</li>
    ));
    console.log(madewith);
    return (
      <div key={item.sys.id} className={styles.projectsCard}>
        <div className={styles.hideScroll}></div>
        <div className={styles.projectImageContainer}>
          <img
            className={styles.projectImages}
            src={`https:${item.fields.image.fields.file.url}`}
            alt={item.fields.image.fields.description}
          />
        </div>
        <div className={styles.projectInfo}>
          <h3>{item.fields.description}</h3>
          <div className={styles.btnContainer}>
            <a
              href={item.fields.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Website</button>
            </a>

            <ul>{madewith}</ul>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.project} id="projects">
      <div className={styles.content}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>{projectCardsElement}</div>
      </div>
    </div>
  );
}
