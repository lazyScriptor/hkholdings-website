import React, { useEffect, useState } from "react";
import commonHeroImage from "../../assets/commonheroimage.png";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";
import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import ServicesExpan from "./ServicesExpan";
import axios from "axios";
import Swal from 'sweetalert2'
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

import LoadingComponent from "../../components/LoadingComponent";
import { useNavigate } from "react-router-dom";
// const BlogData = [
//   {
//     id: 1,
//     title: "10 Tips for Building Your First Web Application",
//     shortDescription:
//       "Learn the essential steps to develop your first web app, from planning to deployment.",
//     image: services1,
//   },
//   {
//     id: 2,
//     title: "Understanding the Basics of Artificial Intelligence",
//     shortDescription:
//       "A beginner's guide to AI concepts, algorithms, and real-world applications.",
//     image: services2,
//   },
//   {
//     id: 3,
//     title: "Mastering React: A Guide to Components and State Management",
//     shortDescription:
//       "Explore the core concepts of React, including components, hooks, and state.",
//     image: services3,
//   },
//   {
//     id: 4,
//     title: "The Ultimate Guide to Responsive Web Design",
//     shortDescription:
//       "Discover how to create stunning websites that look great on any device.",
//     image: services1,
//   },
//   {
//     id: 5,
//     title: "How to Improve Your JavaScript Debugging Skills",
//     shortDescription:
//       "Tips and tricks to efficiently debug JavaScript code and solve errors faster.",
//     image: services2,
//   },
//   {
//     id: 6,
//     title: "Top 5 Programming Languages to Learn in 2024",
//     shortDescription:
//       "An overview of the most in-demand programming languages for the upcoming year.",
//     image: services3,
//   },
//   {
//     id: 7,
//     title: "What is Cloud Computing and How Does It Work?",
//     shortDescription:
//       "Understand the basics of cloud computing and its advantages for businesses.",
//     image: services1,
//   },
//   {
//     id: 8,
//     title: "SEO Tips for Beginners: How to Optimize Your Website",
//     shortDescription:
//       "A beginner-friendly guide to improving your website's search engine rankings.",
//     image: services2,
//   },
//   {
//     id: 9,
//     title: "The Importance of Cybersecurity in Today's Digital World",
//     shortDescription:
//       "Learn about common cyber threats and how to protect your data online.",
//     image: services3,
//   },
// ];

function BlogMain() {
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

  return (
    <>
      <div className="relative w-screen">
        {/* Background Image */}
        <img
          src={commonHeroImage}
          alt="Background"
          className="absolute w-screen h-[100vh]"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-[60vh] text-brandWhite gap-4">
          <h1 className="text-4xl font-semibold">BLOG</h1>
          <p className="max-w-[60%] text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="h-8 bg-brandLightMaroon"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container py-12">
        {BlogData.map((item, index) => (
          <BlogSection
            key={item.id}
            id={item.id}
            index={index}
            image={item.image} // Use direct image path here
            title={item.title}
            short_description={item.short_description}
          />
        ))}
      </div>

      <div className="h-8 bg-brandLightMaroon"></div>
      <Footer />
      <BottomFooter />
    </>
  );
}
export default BlogMain;

export const BlogSection = ({ id, index, image, title, short_description }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/blogs/${id}/image`
        );
        setImageUrl(`http://localhost:3000${response.data.imageUrl}`);
      } catch (error) {
        console.error("Error fetching blog image:", error);
      }
    };

    fetchImageUrl();
  }, [id]);

  return (
    <div className="p-8 shadow-2xl rounded-3xl flex flex-col gap-4">
      {imageUrl ? (
        <img src={imageUrl} className="rounded-b-lg" alt={`Blog ${id}`} />
      ) : (
        <LoadingComponent />
      )}
      <h2
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-xl font-semibold line-clamp-1"
      />
      <p
        dangerouslySetInnerHTML={{ __html: short_description }}
        className="text-md line-clamp-2"
      />
      <ServicesExpan
        index={index}
        image={imageUrl} // Pass the resolved image URL
        title={title}
        shortDescription={short_description}
      />
    </div>
  );
};

function BlogImage({ blogId }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/blogs/${blogId}/image`
        );
        console.log("fetched", response);
        setImageUrl(`http://localhost:3000${response.data.imageUrl}`);
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    };

    fetchImage();
  }, [blogId]);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Blog" className="w-full h-auto rounded" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}



export const BlogSectionAdmin = ({
  id,
  image,
  title,
  short_description,
  onDelete, // Accept the onDelete prop
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/blogs/${id}/image`
        );
        setImageUrl(`http://localhost:3000${response.data.imageUrl}`);
      } catch (error) {
        console.error("Error fetching blog image:", error);
      }
    };

    fetchImageUrl();
  }, [id]);

  const handleEdit = () => {
    navigate(`/admin-blogs-edit/${id}`);
  };

  const handleDelete = async () => {
    // SweetAlert2 confirmation
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This blog will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`http://localhost:3000/blogs/${id}`);
        console.log(response.data);
        // Call the onDelete function from the parent to update the UI
        onDelete(id); // Remove the blog from the parent's state
        // Show success message after successful deletion
        Swal.fire('Deleted!', 'Your blog has been deleted.', 'success');
      } catch (error) {
        console.error("Error deleting blog image:", error);
        // Show error message if deletion fails
        Swal.fire('Error!', 'There was an issue deleting the blog.', 'error');
      }
    }
  };

  return (
    <div className="p-8 shadow-2xl bg-white bg-opacity-30 rounded-3xl flex flex-col gap-4">
      {imageUrl ? (
        <img src={imageUrl} className="rounded-b-lg" alt={`Blog ${id}`} />
      ) : (
        <LoadingComponent />
      )}
      <h2
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-xl font-semibold line-clamp-1"
      />
      <p
        dangerouslySetInnerHTML={{ __html: short_description }}
        className="text-md line-clamp-2"
      />
      <div className="flex justify-center gap-2">
        <button className="p-2 bg-blue-600 text-xl  rounded-xl text-brandWhite" onClick={handleEdit}><CiEdit/></button>
        <button className="p-2 bg-red-600 text-xl rounded-xl text-brandWhite" onClick={handleDelete}><MdOutlineDelete/></button>

      </div>
    </div>
  );
};
