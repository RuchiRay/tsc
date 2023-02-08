import React from "react";
import { Navbar } from "../components";
import { motion } from "framer-motion";
import winkey from "../assets/images/winkey.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const LandingPage = () => {
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
        <div className="w-[31.25rem]  flex items-center absolute top-0 h-[31.25rem] rounded-full border-black border-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full relative flex flex-col pl-20 justify-center text-center rounded-full h-full"
          >
            <div className="w-56 flex flex-col items-center ">
              <p className=" text-[2rem] leading-9">Brands</p>
              <p className="h-[1.5px] mt-0 w-28 bg-black mb-2"></p>
              <p>Has money but needs creative solutions</p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute right-20"
            >
              <img src={winkey} alt="" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0,transform:"rotate(314deg) translateX(-50%)" }}
          animate={{ opacity: 1,transform:"rotate(300deg) translateX(-50%)" }}
          transition={{ duration: 0.2, delay: 1.2 }}
          className="curved line"
        >
          <div className="relative w-full h-full">
            <div className="absolute text-4xl bottom-[3rem] left-4 rotate-45">
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </motion.div>

        <div className="w-[31.25rem] pr-20 justify-end flex items-center absolute top-0 right-0  h-[31.25rem] rounded-full border-black border-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full relative flex flex-col pl-20 justify-center items-end text-center rounded-full h-full"
          >
            <div className="w-56 flex flex-col items-center ">
              <p className=" text-[2rem] leading-9">Talents</p>
              <p className="h-[1.5px] mt-0 w-28 bg-black mb-2"></p>
              <p>Has creative ideas but no money</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
