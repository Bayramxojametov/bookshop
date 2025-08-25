import React, { useState } from "react";

export default function Contact() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500); // yarim soniyadan keyin rang qaytadi
  };

  return (
    <section
      style={{
        padding: "70px 20px",
        fontFamily: "'Segoe UI', sans-serif",
        background: "#fff",
        color: "#333",
        minHeight: "70vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "20px",
        }}
      >
        Contact Me
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          marginBottom: "40px",
          opacity: 0.9,
        }}
      >
        Have a question, idea, or feedback? Drop a message and I’ll respond as
        soon as possible.
      </p>

      <form
        action="https://formsubmit.co/bxojametov97@gmail.com"
        method="POST"
        style={{
          background: "#fff",
          borderRadius: "12px",
          maxWidth: "500px",
          margin: "0 auto",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <input type="hidden" name="_subject" value="New site message" />
        <input type="hidden" name="_captcha" value="false" />

        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            rows="5"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          ></textarea>
        </label>

        <button
          type="submit"
          onClick={handleClick}
          style={{
            background: isClicked ? "#4CAF50" : "#ff5e62",
            color: "#fff",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            transition: "background 0.3s ease",
          }}
        >
          Send
        </button>
      </form>

      <footer
        style={{
          textAlign: "center",
          marginTop: "30px",
          opacity: 0.8,
          fontSize: "0.9rem",
        }}
      >
        This site is owned by <strong>Xojametov Bayram Urazbaevich</strong>
      </footer>
    </section>
  );
}
