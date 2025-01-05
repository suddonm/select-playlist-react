import React, { useState } from "react";

const SongSubmissionForm = () => {
  const [formData, setFormData] = useState({
    songLink: "",
    genre: "",
    mood: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Song submitted successfully!"); // Replace with actual submission logic
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Select Playlist</h1>
        <p style={styles.subtitle}>
          Submit your favorite songs and get them featured in our curated playlists!
        </p>
      </header>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Spotify Song Link</label>
          <input
            type="url"
            name="songLink"
            placeholder="Paste Spotify song link"
            value={formData.songLink}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Genre</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            required
            style={styles.select}
          >
            <option value="">Select Genre</option>
            <option value="chill">Chill</option>
            <option value="workout">Workout</option>
            <option value="study">Study</option>
            <option value="party">Party</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#1c1c1e",
    color: "#f5f5f5",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    fontFamily: "'Roboto', sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: "300",
    color: "#ccc",
  },
  imagePlaceholder: {
    backgroundColor: "#333",
    height: "150px",
    marginBottom: "20px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "0.9rem",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #444",
    backgroundColor: "#2c2c2e",
    color: "#fff",
    outline: "none",
    transition: "all 0.3s ease",
  },
  inputFocus: {
    border: "1px solid #1db954",
  },
  select: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #444",
    backgroundColor: "#2c2c2e",
    color: "#fff",
    outline: "none",
    transition: "all 0.3s ease",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    fontWeight: "700",
    borderRadius: "8px",
    backgroundColor: "#1db954",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#1ed760",
  },
};

export default SongSubmissionForm;
