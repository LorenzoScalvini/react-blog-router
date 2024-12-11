import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PostsNavigator() {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3017/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei post:", error);
      });
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : posts.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < posts.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (posts.length === 0) {
    return <div>Caricamento in corso...</div>;
  }

  const currentPost = posts[currentIndex];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{currentPost.title}</h1>
      <img
        src={`http://localhost:3017/images/${currentPost.image}`}
        alt={currentPost.title}
        style={{ maxWidth: "300px", marginBottom: "20px" }}
      />
      <p>{currentPost.content}</p>
      <div style={{ marginBottom: "10px" }}>
        {currentPost.tags.map((tag) => (
          <span
            key={tag}
            style={{
              display: "inline-block",
              backgroundColor: "#f0f0f0",
              padding: "5px 10px",
              margin: "5px",
              borderRadius: "5px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <button onClick={handlePrevious} style={{ marginRight: "10px" }}>
        Vai Indietro
      </button>
      <button onClick={handleNext}>Vai Avanti</button>
    </div>
  );
}
