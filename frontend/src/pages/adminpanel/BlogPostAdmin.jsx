import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IoIosArrowBack } from "react-icons/io";
import SmallNavBar from "../../components/SmallNavBar";
import { BlogSectionAdmin } from "../blog/BlogMain";
import { IoCreateOutline } from "react-icons/io5";

function BlogPostAdmin() {
  const navigate = useNavigate();
  const [BlogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/blogs`);
        console.log("Fetched blogs:", response.data);
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleDeleteBlog = (id) => {
    // Remove the deleted blog from the BlogData state
    setBlogData((prevData) => prevData.filter((blog) => blog.id !== id));
  };

  return (
    <>
      <div className="p-4 min-h-screen bg-brandDarkMaroon">
        <SmallNavBar />
        <div className="bg-brandLightMaroon/30 border h-[100%] p-16 container ">
          <div className="flex justify-between ">
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  navigate("/admin-dashboard");
                }}
                className=" px-2 py-1 text-brandWhite"
              >
                <IoIosArrowBack />
              </button>
              <h2 className="text-brandWhite text-4xl ">
                Blog Post Management
              </h2>
            </div>
            <div className="flex gap-4 ">
              <button
                onClick={() => navigate("/admin-blogs-create")}
                className="text-brandWhite flex items-center gap-2 bg-brandLightMaroon p-2 px-4 rounded-xl"
              >
                <IoCreateOutline /> Create
              </button>
            </div>
          </div>
          <div className="py-4">
            {/* List of blog posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container py-12">
              {BlogData.map((item) => (
                <BlogSectionAdmin
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  short_description={item.short_description}
                  onDelete={handleDeleteBlog} // Pass the delete handler here
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostAdmin;
