"use client";

import { useState } from "react";
import {Logo, navLinks } from "../constants"
import{ FiMenu, AiOutlineClose } from '../public/icons'

const Navbar = () => {
    const [toggel, setToggel]= useState(false)
  return (
    <header className="fixed top-0 right-0 left-0 w-screen z-50 bg-black">
      <nav className="flex justify-between items-center md:px-20 px-8 py-4">
        {/* Logo */}
        <a 
          href="/" 
          className="relative"
        >
          {Logo.icon}
          <span className="text-white text-[32px] max-sm:text-[24px] font-BlackOpsOne font-medium relative left-[24px] max-sm:left-[18px]">
            {Logo.brandName}
          </span>
        </a>

        <ul className="hidden xl:flex gap-7 ">
          {navLinks.map((link) => (
            <li 
              key={link.label}
              className="hover:scale-110" 
            >
              <a 
                href={link.href}
                className="font-montserrat text-[13px] leading-[18px] text-white-400 hover:text-lime-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="hidden max-xl:inline-block">
          <FiMenu
            className="w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] text-white hover:text-lime-500"
            onClick={() => setToggel(!toggel)}
          />
          {toggel && (
            <div className="absolute top-0 left-0 w-screen h-screen bg-black z-30">
              <AiOutlineClose 
                className="absolute right-7 top-7 w-[20px] h-[20px] text-white hover:text-lime-500 hover:scale-110"
                onClick={() => setToggel(!toggel)}
              />
              <ul className="flex flex-col h-full justify-center items-center gap-6">
                {navLinks.map((link) => (
                  <li 
                  key={link.label}
                  className="hover:scale-110"
                  >
                    <a 
                      href={link.href}
                      className="font-montserrat leading-normal text-xl max-sm:text-lg tracking-widest text-white-400 hover:text-lime-500"
                      onClick={() => setToggel(!toggel)}
                    >
                      {link.label}
                    </a>
                  </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
