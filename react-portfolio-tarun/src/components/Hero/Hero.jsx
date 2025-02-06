import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.greeting}>Hi, I'm</span>
          <span className={styles.name}>Tarun Varshney</span>
        </h1>
        <p className={styles.description}>
          Full-stack developer with 1 years of experience in
          <span className={styles.highlight}> React</span> and
          <span className={styles.highlight}> NodeJS</span>
        </p>
        <a href="path/to/resume.pdf" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
          Resume
          {/* <span className={styles.arrow}>→</span> */}
        </a>
      </div>
      <div className={styles.imageContainer}>
        {/* <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        /> */}
      </div>
      <div className={styles.gradientOrbs}>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
};

export default Hero;