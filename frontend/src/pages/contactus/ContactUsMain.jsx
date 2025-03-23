import React, { useState } from "react";
import commonHeroImage from "../../assets/commonheroimage.png";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import TextField from "@mui/material/TextField";
import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
import { Box, Button } from "@mui/material";
import axios from "axios";
import LoadingComponent from "../../components/LoadingComponent";
import TextEditor from "../blog/texteditor/TextEditor";

function ContactUsMain() {
  return (
    <div>
      {" "}
      <div className="relative">
        {/* Background Image */}
        <img
          src={commonHeroImage}
          alt="Background"
          className="absolute z-0 w-screen h-[100vh]"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-[60vh] text-brandWhite gap-4">
          <h1 className="text-4xl font-semibold">Contact Us</h1>

          {/* <p className="max-w-[60%] text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
          </p> */}
        </div>
      </div>
      <div className="h-8 bg-brandLightMaroon"></div>
      <Strip1 />
      <Strip2 />
      <div className="h-8 bg-brandLightMaroon"></div>
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default ContactUsMain;

const Strip1 = () => {
  return (
    <>
      <div className="py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 container ">
          <div className=" flex gap-4 justify-start lg:justify-center items-center">
            <PiPhoneCallFill className="text-5xl w-12" />
            <h2 className="text-center text-6xl font-extralight">| </h2>
            <div className="flex flex-col justify-start items-start">
              <h4 className="text-2xl font-semibold">PHONE:</h4>
              <p className="z-50 ">
                <a
                  className="hover:text-brandLightMaroon transition-all duration-200"
                  href="tel:0716195913"
                >
                  071 6195913
                </a>{" "}
                /
                <a
                  className="hover:text-brandLightMaroon transition-all duration-200"
                  href="tel:0716195913"
                >
                  {" "}
                  070 5123804{" "}
                </a>{" "}
                /<br />
                <a
                  className="hover:text-brandLightMaroon transition-all duration-200"
                  href="tel:0113425370"
                >
                  {" "}
                  011 3425370
                </a>
              </p>
            </div>
          </div>

          <div className=" flex gap-4 justify-start  items-center  group  lg:justify-end lg:pl-8 ">
            <MdLocationOn className="text-6xl  w-12" />
            <h2 className="text-center text-6xl font-extralight">| </h2>
            <div className="flex flex-col justify-start items-start">
              <h4 className="text-2xl font-semibold">LOCATION:</h4>
              <p className="z-50">
                <a className=" group-hover:text-brandLightMaroon transition-all duration-200"
                  href="https://maps.app.goo.gl/dAhhR4fijLmCwPJ18"
                  target="_blank"
                >
                  No. 86/A 1/1, Elapitiwala, Ragama
                </a>
              </p>
            </div>
          </div>

          <div className=" flex gap-4 justify-start lg:justify-center   items-center ">
            <MdEmail className="text-5xl w-12" />
            <h2 className="text-center text-6xl font-extralight">| </h2>
            <div className="flex flex-col justify-start items-start">
              <h4 className="text-2xl font-semibold">EMAIL:</h4>
              <p className="z-50">
                <a
                  href="mailto:info@hkholdings.lk"
                  className="hover:text-brandLightMaroon transition-all duration-200"
                >
                  {" "}
                  info@hkholdings.lk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Strip2 = () => {
  return (
    <>
      <div className="bg-brandDarkMaroon py-12">
        <div className="container flex flex-col items-center gap-4  text-brandWhite">
          <div className="p-8">
            <h1 className="text-4xl font-semibold text-center">
              LET'S CONNECT CONSTELLATIONS
            </h1>
            <p className="font-light text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export const styles = {
  borderRadius: 1,
  backgroundColor: "#40342F",
  "& .MuiInputLabel-root": {
    color: "grey", // White label font
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#AD8E61", // Gold stroke for the outline
    },
    "&:hover fieldset": {
      borderColor: "darkred", // Darker red on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#241C1A", // Dark outline when focused
    },
    "& input": {
      color: "#FEFEFE", // Blue font for entered text
    },
    "& textarea": {
      color: "#FEFEFE", // Blue font for multiline text
    },
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    // Validate the form
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email_address ||
      !formData.phone_number ||
      !formData.message
    ) {
      setErrorMessage("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      console.log("d");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/enquiries`,
        formData
      );
      setSuccessMessage("Your enquiry has been submitted successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email_address: "",
        phone_number: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong. Please try again later.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          p: 0,
          m: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-4 justify-center md:w-[50%] w-full">
          <TextField
            fullWidth
            sx={styles}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            sx={styles}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-4">
          <TextField
            fullWidth
            sx={styles}
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            name="email_address"
            value={formData.email_address}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            sx={styles}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            sx={styles}
            id="outlined-multiline-flexible"
            label="Message"
            multiline
            rows={4}
            maxRows={6}
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          {successMessage && (
            <div className="text-green-500">{successMessage}</div>
          )}
          <button
            className="mt-8 w-[100%] px-4 self-center md:self-center py-2 rounded-lg  bg-brandLightMaroon hover:bg-brandLightMaroon/80 transition-all duration-200 text-white shadow-lg"
            type="submit"
            disabled={loading}
          >
            {loading ? <LoadingComponent /> : "Submit"}
          </button>
        </div>
      </Box>
    </>
  );
};
