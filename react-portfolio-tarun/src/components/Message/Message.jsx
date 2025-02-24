import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Message.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'your_service_id', 
        'your_template_id', 
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message
        },
        'your_public_key'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={styles.contact} id="message">
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

        {status && <p className={styles.statusMessage}>{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
// jkj