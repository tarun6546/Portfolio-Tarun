import React, { useEffect, useState } from "react";
import "./Loader.css"; // Import the styles

const Loader = ({ setLoading }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    // Simulate loading completion
    setTimeout(() => {
      setLoading(false); // Hide the loader after 3 seconds
    }, 3000);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loader-text">Loading<span className="dots">{dots}</span></p>
    </div>
  );
};

export default Loader;
