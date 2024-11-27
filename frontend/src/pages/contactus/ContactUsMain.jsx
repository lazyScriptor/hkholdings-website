import React from "react";
import commonHeroImage from "../../assets/commonheroimage.png";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import TextField from "@mui/material/TextField";
import Footer from "../../components/Footer";
import BottomFooter from "../../components/BottomFooter";
function ContactUsMain() {
  return (
    <div>
      {" "}
      <div className="relative w-screen">
        {/* Background Image */}
        <img
          src={commonHeroImage}
          alt="Background"
          className="absolute w-screen h-[100vh]"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-[60vh] text-brandWhite gap-4">
          <h1 className="text-4xl font-semibold">Contact</h1>
          <p className="max-w-[60%] text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
          </p>
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
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 container">
          <div className=" flex gap-4 justify-center items-center">
            <PiPhoneCallFill className="text-5xl " />
            <h2 className="text-center text-6xl font-extralight">| </h2>
            <div className="flex flex-col justify-start items-start">
              <h4 className="text-2xl font-semibold">PHONE:</h4>
              <p className="">+94 11 2 89654511</p>
            </div>
          </div>

          <div className=" flex gap-4 justify-center  items-center md:justify-end pl-8 md:pl-16">
            <MdLocationOn className="text-7xl  " />
            <h2 className="text-center text-6xl font-extralight">| </h2>
            <div className="flex flex-col justify-start items-start">
              <h4 className="text-2xl font-semibold">LOCATION:</h4>
              <p className="">
                404/4A/1, Maithreedasa Mawatha, Pitipana North, Homagama
              </p>
            </div>
          </div>

          <div className=" flex gap-4 justify-center  items-center ">
            <MdEmail className="text-5xl " />
            <h2 className="text-center text-6xl font-extralight">| </h2>
            <div className="flex flex-col justify-start items-start">
              <h4 className="text-2xl font-semibold">EMAIL:</h4>
              <p className="">info@hkholidngs.lk</p>
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
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:w-[50%] w-full">
        <TextField
          fullWidth
          sx={styles}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          sx={styles}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
        />
      </div>
      <div className="w-full md:w-[50%] flex flex-col gap-4">
        <TextField
          fullWidth
          sx={styles}
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <TextField
          fullWidth
          sx={styles}
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
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
        />
        <button className=" px-8 py-3 mt-2 bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white rounded-lg">
          SEND
        </button>
      </div>
    </>
  );
};
