import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.greeting}>Hi, I'm </span>
          <span className={styles.name}>Tarun Varshney</span>
        </h1>
        <p className={styles.description}>
          "I’m a passionate <strong className={styles.highlight}>MERN Stack</strong> and <strong className={styles.highlight}>Java Developer</strong>, focused on building scalable 
          applications, crafting clean code, 
          and continuously learning new technologies to deliver innovative solutions."
        </p>
        {/* Update the button to trigger the download */}
        <a 
          href="react-portfolio-tarun\public\tarundocx"
          download 
          className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <div className={styles.imageContainer}></div>
      <div className={styles.gradientOrbs}>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
};

export default Hero;
