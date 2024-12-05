import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function TextEditor() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [blogId, setBlogId] = useState(null);
  const [error, setError] = useState("");  // Error state for better error handling

  // Fetch blog data when blogId changes
  useEffect(() => {
    if (blogId) {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/blogs/${blogId}`
          );
          const { title, short_description, image: imageUrl } = response.data;
          setTitle(title);
          setBody(short_description);
          setImage(imageUrl); // Set image URL after fetching blog data
        } catch (err) {
          setError("Failed to fetch blog data.");
          console.error("Error fetching blog data:", err);
        }
      };
      fetchBlog();
    }
  }, [blogId]);

  // Handle title and body changes
  const handleChangeTitle = (value) => setTitle(value);
  const handleChangeBody = (value) => setBody(value);

  // Create a blog (Step 1)
  const handleCreateBlog = async () => {
    try {
      const response = await axios.post("http://localhost:3000/blogs", {
        title,
        shortDescription: body,
        image: null, // Initial image is null
      });
      setBlogId(response.data.blogId); // Set the returned blog ID
      setError("");  // Reset any previous errors
      alert("Blog created successfully!");
    } catch (err) {
      setError("Failed to create the blog. Please try again.");
      console.error("Error creating blog:", err);
    }
  };

  // Handle image upload (Step 2)
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !blogId) {
      setError("Please create the blog first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `http://localhost:3000/blogs/${blogId}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImage(response.data.imageUrl); // Update the image URL in state
      alert("Image uploaded successfully!");
    } catch (err) {
      setError("Failed to upload the image. Please try again.");
      console.error("Error uploading image:", err);
    }
  };

  // Fetch blog details based on blogId entered in input field
  const handleBlogIdChange = (e) => {
    const enteredBlogId = e.target.value;
    setBlogId(enteredBlogId); // Set blog ID to trigger useEffect
  };

  return (
    <div>
      <h1>Create or Edit Blog</h1>

      {/* Title Editor */}
      <div>
        <h3>Set the title</h3>
        <ReactQuill value={title} onChange={handleChangeTitle} />
      </div>

      {/* Body Editor */}
      <div>
        <p>Set the body</p>
        <ReactQuill value={body} onChange={handleChangeBody} />
      </div>

      {/* Create Blog Button */}
      <button onClick={handleCreateBlog}>Create Blog</button>

      {/* Display Error Messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Image Upload */}
      <div>
        <p>Upload the image</p>
        <input type="file" onChange={handleFileChange} />
        {image && <img src={image} alt="Uploaded" style={{ maxWidth: "100%" }} />}
      </div>

      {/* Fetch Blog Details by Blog ID */}
      <div>
        <p>Enter Blog ID to Fetch Details</p>
        <input
          type="text"
          onChange={handleBlogIdChange}
          className="bg-green-300 w-44 border-2 border-red-400"
        />
      </div>
    </div>
  );
}

export default TextEditor;
