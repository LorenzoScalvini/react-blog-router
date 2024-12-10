import React, { useState } from "react";
import axios from "axios";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
      image,
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    const url = "http://localhost:3017/posts";

    axios
      .post(url, newPost)
      .then((response) => {
        setMessage("Post aggiunto con successo!");
        setTitle("");
        setContent("");
        setImage("");
        setTags("");
      })
      .catch((error) => {
        setMessage("Si è verificato un errore durante l'aggiunta del post.");
        console.error("Errore:", error);
      });
  };

  return (
    <div>
      <h1>Aggiungi un Nuovo Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titolo:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Contenuto:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Immagine:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="tags">Tag (separati da virgola):</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </div>
        <button type="submit">Aggiungi Post</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
