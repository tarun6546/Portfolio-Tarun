import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  const contactLinks = [
    {
      icon: "contact/emailIcon.png",
      label: "Email",
      href: "mailto:tarunvarshney2112@gmail.com",
      text: "tarunvarshney2112@gmail.com"
    },
    {
      icon: "contact/linkedinIcon.png",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tarun-varshney-051380191/",
      text: "Tarun Varshney"
    },
    {
      icon: "contact/githubIcon.png",
      label: "GitHub",
      href: "https://github.com/tarun6546",
      text: "github.com/tarun6546"
    },
    {
      icon: "contact/phoneIcon.png",
      label: "Phone",
      href: "tel:+917017484754",
      text: "+91 7017484754"
    }
  ];

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.header}>
        <h2>Ready to Create Something Extraordinary?</h2>
        <p>Let's turn your vision into reality</p>
      </div>

      <div className={styles.cardGrid}>
        {contactLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.card}>
            <div className={styles.cardContent}>
              <img src={getImageUrl(link.icon)} alt={link.label} />
              <h3>{link.label}</h3>
              <p>{link.text}</p>
            </div>
            <div className={styles.cardHover}>
              <span>Connect →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
    // juhjk
  );
};

export default Contact;