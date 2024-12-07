import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/commonheroimage.png";
import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
function MainScreen() {
  return (
    <div className="bg-brandDarkMaroon">
      {/* <div className={`grid md:grid-cols-2 h-screen bg-${heroImage}`}>
        <div
          onClick={() => navigate("/admin-blogs")}
          className="flex items-center justify-center bg-brandLightMaroon hover:bg-opacity-90 cursor-pointer text-brandWhite
        text-7xl transition-all duration-700 hover:text-brandBlack relative p-4"
        >
          <div
            className="absolute top-2 right-2 p-2 aspect-square bg-brandDarkMaroon/90 hover:text-green-500 w-20 flex justify-center items-center rounded-lg
          "
          >
            5
          </div>
          Blogs
        </div>
        <div
          onClick={() => navigate("/admin-inquiries")}
          className="flex relative items-center justify-center bg-brandDarkMaroon  hover:bg-opacity-90 cursor-pointer text-brandWhite
        text-7xl transition-all duration-700  hover:text-brandLightMaroon"
        >
          <div
            className="absolute top-2 right-2 p-2 aspect-square bg-brandLightMaroon/90 hover:text-green-500 w-20 flex justify-center items-center rounded-lg
          "
          >
            5
          </div>
          Inquiries
        </div>
      </div> */}
      <NewMainScreen />
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default MainScreen;

const NewMainScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container  h-screen w-screen flex justify-center items-center">
        <div className="grid md:grid-cols-2 gap-4">
          <div
            onClick={() => navigate("/admin-blogs")}
            className="p-16 capitalize hover:bg-opacity-70 cursor-pointer bg-brandLightMaroon text-brandWhite
         transition-all duration-700   rounded-md text-center text-2xl font-semibold "
          >
            Blog post management
          </div>
          <div
            onClick={() => navigate("/admin-inquiries")}
            className="p-16 capitalize hover:bg-opacity-70 cursor-pointer text-brandWhite
       transition-all duration-700  bg-brandLightMaroon rounded-md text-center text-2xl font-semibold"
          >
            Inquiry management
          </div>
        </div>
      </div>
    </>
  );
};
