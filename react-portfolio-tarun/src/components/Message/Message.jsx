import React, { useState } from 'react';
/* filepath: /src/components/Message/Message.jsx */
import styles from './Message.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
  };
  // fj;fs

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactContent}>
        <h2>Let's Connect</h2>
        <p>Have a project in mind? I'd love to hear about it.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className={styles.focusLine}></span>
          </div>

          <div className={styles.formGroup}>
            <input
              type="email" 
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className={styles.focusLine}></span>
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <span className={styles.focusLine}></span>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
            <span className={styles.btnIcon}>→</span>
          </button>
        </form>

        <div className={styles.contactInfo}>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;