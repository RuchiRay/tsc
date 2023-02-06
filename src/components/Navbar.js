import React, { useState } from "react";
import Logo from "./Logo";
import Switch from "./Switch";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    console.log("click");
    setIsOpen((prev)=>!prev)
  };
  return (
    <div className="w-full items-center flex px-12 md:px-20 lg:px-[9.375rem] justify-between h-[7.5rem] py-8">
      <Logo />
      <div className="md:flex hidden  gap-6 md:gap-10 items-center text-xl font-medium">
        <p>Work</p>
        <p>Services</p>
        <p>About</p>
        <p className="px-4 py-2 border-black border-2">Contact</p>
        <Switch />
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
