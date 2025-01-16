"use client";
import Image from "next/image";
import { useState } from "react";
// this is a component that will be used in the header it contains the menu and the links
const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    console.log("handleMenu");
    setOpen(!open);
  };
  return (
    <nav className="flex gap-4">
      <div className="relative w-6 h-6 md:hidden">
        <button onClick={handleMenu}>
          <Image src="/menu.png" alt="menu" fill />
        </button>
      </div>
      <div //className={open ? "flex flex-col" : "hidden"} /* menu for mobile*/
        className={`md:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[500px] py-4" : "max-h-0 py-0" // Use max-h for smooth transition
        } flex flex-col`} // menu for mobile
      >
        <a href="" className="px-4 py-2 hover:bg-gray-100 w-full text-center">
          Conócenos
        </a>
        <a href="" className="px-4 py-2 hover:bg-gray-100 w-full text-center">
          Modelos
        </a>
        <a href="" className="px-4 py-2 hover:bg-gray-100 w-full text-center">
          Contactanos
        </a>
      </div>
      <div className="hidden md:flex gap-4" /* menu for desktop*/>
        <a href="">Conócenos</a>
        <a href="">Modelos</a>
        <a href="">Contactanos</a>
      </div>
    </nav>
  );
};

export default Nav;
