import React, { CSSProperties } from "react";

const Greeting: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Hi, John Doe!</h1>
        <p style={styles.paragraph}>
          Let&apos;s pick up where we left off and keep the momentum going.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="/Removebg Characters 1.svg" 
          alt="Kids Playing"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
  },
  textContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column" as const,
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#6c757d",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  }
};

export default Greeting;