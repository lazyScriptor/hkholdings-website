import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api";
import PageHero from "../../components/ui/PageHero";
import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import ServicesExpan from "./ServicesExpan";
import axios from "axios";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

import LoadingComponent from "../../components/LoadingComponent";
import { Link, useNavigate } from "react-router-dom";

function BlogMain() {
  const [BlogData, setBlogData] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/blogs`);
        if (cancelled) return;
        setBlogData(Array.isArray(response.data) ? response.data : []);
        setStatus("ready");
      } catch (error) {
        if (cancelled) return;
        console.error("Error fetching blogs:", error);
        setStatus("error");
      }
    };

    fetchBlogs();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <PageHero
        eyebrow="News & updates"
        title="Blog"
        subtitle="HK Holdings designs and produces glass and steel hand railings, balcony railings, tempered glass, staircases, canopies and warehouses — expertly manufactured in Sri Lanka using only the best materials."
        crumbs={[{ label: "Blog" }]}
      />
      {status === "ready" && BlogData.length > 0 ? (
        <div className="container grid grid-cols-1 gap-6 py-16 md:grid-cols-3">
          {BlogData.map((item, index) => (
            <BlogSection
              key={item.id}
              id={item.id}
              index={index}
              image={item.image}
              title={item.title}
              short_description={item.short_description}
            />
          ))}
        </div>
      ) : (
        <div className="container py-20">
          <div className="mx-auto max-w-lg rounded-2xl border border-ink-100 bg-ink-50 p-10 text-center">
            <h2 className="font-display text-xl font-bold text-ink-900">
              {status === "loading" ? "Loading posts…" : "No posts yet"}
            </h2>
            <p className="mt-3 text-fluid-body text-ink-500">
              {status === "loading"
                ? "Fetching the latest updates from HK Holdings."
                : "We're working on our first articles. In the meantime, take a look at our services or get in touch."}
            </p>
            {status !== "loading" && (
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link to="/services/all" className="btn-primary btn-sheen">
                  View services
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact us
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

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
          `${API_BASE_URL}/blogs/${id}/image`
        );
        setImageUrl(`${API_BASE_URL}${response.data.imageUrl}`);
      } catch (error) {
        console.error("Error fetching blog image:", error);
      }
    };

    fetchImageUrl();
  }, [id]);

  return (
    <div className="p-8 border-brandLightMaroon/30 shadow-lg border-b-2 border-r-2 hover:shadow-2xl transition-all duration-300 rounded-3xl flex flex-col gap-4">
      <div className="h-48 overflow-hidden rounded-b-lg">
        {imageUrl ? (
          <img src={imageUrl} className="rounded-b-lg" alt={`Blog ${id}`} />
        ) : (
          <LoadingComponent />
        )}
      </div>

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
          `${API_BASE_URL}/blogs/${blogId}/image`
        );
        console.log("fetched", response);
        setImageUrl(`${API_BASE_URL}${response.data.imageUrl}`);
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
          `${API_BASE_URL}/blogs/${id}/image`
        );
        setImageUrl(`${API_BASE_URL}${response.data.imageUrl}`);
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
      title: "Are you sure?",
      text: "This blog will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `${API_BASE_URL}/blogs/${id}`
        );
        console.log(response.data);
        // Call the onDelete function from the parent to update the UI
        onDelete(id); // Remove the blog from the parent's state
        // Show success message after successful deletion
        Swal.fire("Deleted!", "Your blog has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting blog image:", error);
        // Show error message if deletion fails
        Swal.fire("Error!", "There was an issue deleting the blog.", "error");
      }
    }
  };

  return (
    <div className="p-8 shadow-2xl bg-white bg-opacity-30 rounded-3xl flex flex-col gap-4">
      <div className="h-48 overflow-hidden rounded-b-lg">
        {imageUrl ? (
          <img src={imageUrl} className="rounded-b-lg" alt={`Blog ${id}`} />
        ) : (
          <LoadingComponent />
        )}
      </div>

      <h2
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-xl font-semibold line-clamp-1"
      />
      <p
        dangerouslySetInnerHTML={{ __html: short_description }}
        className="text-md line-clamp-2"
      />
      <div className="flex justify-center gap-2">
        <button
          className="p-2 bg-blue-600 text-xl  rounded-xl text-brandWhite"
          onClick={handleEdit}
        >
          <CiEdit />
        </button>
        <button
          className="p-2 bg-red-600 text-xl rounded-xl text-brandWhite"
          onClick={handleDelete}
        >
          <MdOutlineDelete />
        </button>
      </div>
    </div>
  );
};
