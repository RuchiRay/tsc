import React, { useState } from "react";
import Logo from "./Logo";
import Switch from "./Switch";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    console.log("click");
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="w-full relative items-center flex px-12 md:px-20 lg:px-[9.375rem] justify-between h-[7.5rem] py-8">
      <Logo />
      <div
        className={`${
          isOpen && "opacity-100 "
        } w-full md:w-max left-0 px-12 top-[7.5rem] gap-4 transition-all duration-500 absolute  md:flex-row bg-white md:static flex flex-col  md:gap-10 md:items-center opacity-0 md:opacity-100 text-base md:text-xl font-medium`}
        // className={
        //   isOpen
        //     ? "origin-center  px-12 opacity-100 transition-all duration-1000 top-[7.5rem] gap-4 bg-white absolute  text-base  font-medium"
        //     : "md:flex-row absolute top-[7.5rem] px-12 w-full left-0 opacity-0 md:opacity-100 md:static md:text-xl  md:gap-10 md:items-center"
        // }
      >
        <p>Work</p>
        <p>Services</p>
        <p>About</p>
        <p className="md:px-4 md:py-2 md:border-black md:border-2">Contact</p>
        <div className="hidden md:block">
          <Switch />
        </div>
      </div>
      <div className="flex gap-4 md:hidden items-center ">
        <Switch />
        <button className="text-4xl" onClick={handleMenu}>
          {isOpen ? <MdClose /> : <FiMenu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
