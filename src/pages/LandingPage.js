import React, { useState } from "react";
import { Navbar } from "../components";
import { motion } from "framer-motion";
import winkey from "../assets/images/winkey.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
const LandingPage = () => {
  const [hide, setHide] = useState("");
  const [redText, setRedText] = useState("hidden");

  const handleMouseEnter = () => {
    console.log("hover");
    setHide("opacity-0 transition-all duration-1000");
    setRedText("inline text-red-950 font-semibold text-xl");
  };
  const handleMouseLeave = () => {
    console.log("hover");
    setHide("transition-all duration-1000");
    setRedText("hidden");
  };

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, marginTop: 100 }}
        animate={{ opacity: 1, marginTop: 60 }}
        transition={{ duration: 1 }}
        className="flex justify-center mt-[3.75rem] font-bold text-4xl"
      >
        <p>Creativity. Collaboration. </p>
        <p className="text-red-950">&nbsp; A pinch of</p>
        <p>&nbsp; STUPID*</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, width: "100%" }}
        animate={{ opacity: 1, width: "824px" }}
        transition={{ duration: 1 }}
        className=" font-semibold relative m-auto h-[31.25rem] mt-36"
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-[31.25rem] peer/circle transition-all duration-1000 hover:scale-[1.176] flex items-center absolute top-0 h-[31.25rem] hover:border-4 hover:z-10 bg-white rounded-full border-black border-2"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full relative group flex flex-col pl-20 justify-center text-center rounded-full h-full"
          >
            <div className="w-max flex flex-col items-center ">
              <div className="flex gap-1 text-[2rem] leading-9">
                <div>
                  <p>Brands</p>
                  <p className="h-[1.5px] mt-0 w-28 bg-black mb-2"></p>
                </div>
                <BsArrowUpRight className="group-hover:hidden" />
              </div>
              <div>
                <span>Creative solutions?</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 1.2 }}
              className="absolute right-20"
            >
              <img src={winkey} alt="" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, transform: "rotate(314deg) translateX(-50%)" }}
          animate={{ opacity: 1, transform: "rotate(300deg) translateX(-50%)" }}
          transition={{ duration: 0.2, delay: 1.4 }}
          className="curved line"
        >
          <div className="relative w-full h-full">
            <div className="absolute text-4xl bottom-[3rem] left-4 rotate-45">
              <MdOutlineKeyboardArrowDown />
            </div>
            <p className="text-red-950 text-xl font-american absolute rotate-[60deg] -right-8">
              we are here...
            </p>
          </div>
        </motion.div>

        <div className="w-[31.25rem] peer-hover/circle:scale-[0.8] transition-all duration-1000 peer-hover/circle:opacity-50 pr-20 justify-end flex items-center absolute top-0 right-0  h-[31.25rem] rounded-full border-black border-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full relative flex flex-col pl-20 justify-center items-end text-center rounded-full h-full"
          >
            <div className="w-56 flex flex-col items-center ">
              <div className="flex gap-1 text-[2rem] leading-9">
                <div>
                  <p>Talents</p>
                  <p className="h-[1.5px] mt-0 w-28 bg-black mb-2"></p>
                </div>
                <BsArrowUpRight />
              </div>
              <p className={`${hide}`}>Creative problem solver?</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
