import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Message from './components/Message/Message';
import Loader from './components/Loader/Loader'; // Import Loader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />  // Show loader while loading
      ) : (
        <div className={styles.App}>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Message />
        </div>
      )}
    </>
  );
}

export default App;
// m