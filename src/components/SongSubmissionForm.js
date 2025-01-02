import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./../styles/Form.css";

const SongSubmissionForm = () => {
  const [formData, setFormData] = useState({ songLink: "", genre: "", mood: "" });
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValid(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValid) {
      console.log("Submitted data:", formData);
      alert("Thank you for your submission!");
    } else {
      alert("Please complete the CAPTCHA before submitting.");
    }
  };

  return (
    <form className="song-form" onSubmit={handleSubmit}>
      <h2>Submit a Song</h2>
      <div>
        <label>Spotify Song Link</label>
        <input
          type="url"
          name="songLink"
          placeholder="Paste Spotify song link here"
          value={formData.songLink}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Genre</label>
        <select name="genre" value={formData.genre} onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="chill">Chill</option>
          <option value="workout">Workout</option>
          <option value="study">Study</option>
          <option value="party">Party</option>
        </select>
      </div>
      <div>
        <label>Mood</label>
        <select name="mood" value={formData.mood} onChange={handleChange} required>
          <option value="">Select Mood</option>
          <option value="happy">Happy</option>
          <option value="calm">Calm</option>
          <option value="energetic">Energetic</option>
          <option value="romantic">Romantic</option>
        </select>
      </div>
      <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your key
        onChange={handleCaptchaChange}
      />
      <button type="submit" disabled={!captchaValid}>
        Submit
      </button>
    </form>
  );
};

export default SongSubmissionForm;
