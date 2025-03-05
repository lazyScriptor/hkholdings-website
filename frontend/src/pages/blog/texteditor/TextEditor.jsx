import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function TextEditor() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [blogId, setBlogId] = useState(null);
  const [error, setError] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [completeDataObject, setCompleteDataObject] = useState({
    title: "",
    shortDescription: "",
  });
  const { id } = useParams();
  useEffect(() => {
    console.log("this is the id", id);
    setBlogId(id);
    if (blogId) {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/blogs/${blogId}`
          );
          const { jsonData, title, short_description, image } = response.data;

          setTitle(title || ""); // Update `title` state
          setBody(short_description || ""); // Update `body` state
          setImage(image || ""); // Update `image` state

          const parsedData =
            typeof jsonData === "string" ? JSON.parse(jsonData) : jsonData;
          setCompleteDataObject(parsedData); // Keep the full object for other purposes
          setIsEditMode(true);
        } catch (err) {
          setError("Failed to fetch blog data.");
          console.error("Error fetching blog data:", err);
        }
      };
      fetchBlog();
    }
  }, [blogId]);

  useEffect(() => {
    // Construct the URL
    const fetchImage = async () => {
      try {
        const url = `http://localhost:3000/uploads/${blogId}`; // Adjust based on your backend
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [blogId]);

  const handleCreateBlog = async () => {
    const jsonData = { title, shortDescription: body };
    const fullData = { title, shortDescription: body, image, jsonData };

    try {
      const response = await axios.post(
        "http://localhost:3000/blogs",
        fullData
      );
      setBlogId(response.data.blogId); // Set the returned blog ID
      setError("");
      alert("Blog created successfully!");
    } catch (err) {
      setError("Failed to create the blog. Please try again.");
      console.error("Error creating blog:", err);
    }
  };

  const handleUpdateBlog = async () => {
    const jsonData = { title, shortDescription: body };
    const fullData = { title, shortDescription: body, image, jsonData };

    try {
      await axios.put(`http://localhost:3000/blogs/${blogId}`, fullData);
      setError("");
      alert("Blog updated successfully!");
    } catch (err) {
      setError("Failed to update the blog. Please try again.");
      console.error("Error updating blog:", err);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setError("Please choose an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `http://localhost:3000/blogs/${blogId}/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setImage(response.data.imageUrl); // Update the image URL in state
      alert("Image uploaded successfully!");
    } catch (err) {
      setError("Failed to upload the image. Please try again.");
      console.error("Error uploading image:", err);
    }
  };

  const handleBlogIdChange = (e) => {
    setBlogId(e.target.value);
  };

  return (
    <div className="bg-brandLightMaroon/30 border h-[100%] p-16 container flex flex-col gap-4 relative">
      <h1>{isEditMode ? "Edit Blog" : "Create Blog"}</h1>

      {/* Title Editor */}
      {/* Title Editor */}
      <div className="bg-brandWhite bg-opacity-50 p-8 rounded-md">
        <h3>Set the title</h3>
        <ReactQuill
          value={title} // Bind to `title` state directly
          onChange={(value) => setTitle(value)} // Update `title` state
        />
      </div>

      {/* Body Editor */}
      <div className="bg-brandWhite bg-opacity-50 p-8 rounded-md">
        <p>Set the body</p>
        <ReactQuill
          value={body} // Bind to `body` state directly
          onChange={(value) => setBody(value)} // Update `body` state
        />
      </div>

      {/* Create or Edit Button */}
      <button
        className="mt-6 px-8 py-2 bg-brandLightMaroon hover:bg-brandDarkMaroon self-center transition-all duration-200 text-white rounded-lg"
        onClick={isEditMode ? handleUpdateBlog : handleCreateBlog}
      >
        {isEditMode ? "Update Blog" : "Create Blog"}
      </button>

      {/* Error Messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Image Upload */}
      <div>
        <p>Upload the image</p>
        <input type="file" onChange={handleFileChange} />
        {/* {image && (
          <img src={image} alt="Uploaded" style={{ maxWidth: "100%" }} />
        )} */}
      </div>

      {/* Fetch Blog Details by Blog ID */}
      {/* <div>
        <p>Enter Blog ID to Fetch Details</p>
        <input
          type="text"
          onChange={handleBlogIdChange}
          className="bg-green-300 w-44 border-2 border-red-400"
        />
      </div> */}

      <div className="w-52 ">
        {imageUrl == undefined ? (
          <img src={imageUrl} alt={`Blog ${blogId}`} style={{}} />
        ) : (""
          // <MessageComponent
          //   color={`-red-500`}
          //   message={"Image not available"}
          // />
        )}
      </div>
    </div>
  );
}

export default TextEditor;

const MessageComponent = ({ color, message }) => {
  return (
    <div className={` absolute bottom-5 text${color} p-2 border border${color}`}>
      {message}
    </div>
  );
};
