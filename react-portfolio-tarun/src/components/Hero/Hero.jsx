import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.greeting}>Hi, I'm </span>
          <span className={styles.name}>
            <span className={styles.largeLetter}>T</span>arun{" "}
            <span className={styles.largeLetter}>V</span>arshney
          </span>
        </h1>
        <p className={styles.description}>
          "I’m a passionate <strong className={styles.highlight}>MERN Stack</strong> and <strong className={styles.highlight}>Java Developer</strong>, focused on building scalable 
          applications, crafting clean code, 
          and continuously learning new technologies to deliver innovative solutions."
        </p>
        <a 
          href="/path-to-your-resume.pdf" 
          download 
          className={styles.contactBtn}>
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
