import React, { useState, useEffect } from "react";
import axios from "axios";

function TextEditor() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [blogId, setBlogId] = useState("");

  // Handle title and body changes
  const handleChangeTitle = (value) => setTitle(value);
  const handleChangeBody = (value) => setBody(value);

  // Handle image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the image
      setImage(imageUrl); // Set the image URL in the state
    }
  };

  // Fetch image by blogId (Step 1)
  const fetchImageById = async () => {
    if (!blogId) {
      alert("Please enter a valid Blog ID.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/blogs/${blogId}`);
      const fetchedImageUrl = response.data.image; // Assuming the image URL is in `image` field
      setImage(fetchedImageUrl); // Set the image URL in state
    } catch (err) {
      console.error("Error fetching image:", err);
      alert("Failed to retrieve the image.");
    }
  };

  return (
    <div>
      <h1>Set the title</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => handleChangeTitle(e.target.value)}
      />

      <p>Set the body</p>
      <textarea
        value={body}
        onChange={(e) => handleChangeBody(e.target.value)}
      />

      <button>Create Blog</button>

      <p>Upload the image</p>
      <input type="file" onChange={handleFileChange} />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: "100%" }} />}

      <h2>Enter Blog ID to Fetch Image</h2>
      <input
        type="text"
        placeholder="Enter Blog ID"
        value={blogId}
        onChange={(e) => setBlogId(e.target.value)}
      />
      <button onClick={fetchImageById}>Fetch Image</button>

      {image && <img src={image} alt="Fetched" style={{ maxWidth: "100%" }} />}
    </div>
  );
}

export default TextEditor;
