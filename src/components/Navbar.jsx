"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { FiMenu } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Prevent scrolling when the mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-[#F5DEB3] p-2  relative z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-black text-2xl" onClick={toggleMenu} aria-label="Toggle menu">
          <FiMenu />
        </button>

        {/* Logo */}
        <div className="flex lg:order-first order-last lg:justify-start justify-end mb-4">
          <img src="/images/logo.jpg" alt="Lordsman Leather" className="h-16 sm:h-20 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-2 xl:space-x-6 text-black font-semibold text-sm xl:text-xl">
          <Link href="/" className="hover:text-[#cb7120]">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#cb7120]">
            About
          </Link>
          <Link href="/premium-bike-gear" className="hover:text-[#cb7120]">
            Premium Bike Gear
          </Link>
          <Link href="/leatherBags" className="hover:text-[#cb7120]">
            Leather Bags
          </Link>
          <Link href="/jackets" className="hover:text-[#cb7120]">
            Jackets
          </Link>
          <Link href="/customized-order" className="hover:text-[#cb7120]">
            Customized Order
          </Link>
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block p-2 xl:p-6">
          <Link href="/contactUs">
            <button className="bg-[#935217] hover:bg-[#cb7120] text-white px-3 py-1 xl:px-4 xl:py-2 rounded-md text-sm xl:text-base">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#F5DEB3]  transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-black text-2xl">
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col items-start p-4 space-y-4 font-extrabold ">
          <Link href="/" className="text-black font-bold">
            Home
          </Link>
          <Link href="/about" className="text-black font-bold">
            About
          </Link>
          <Link href="/premium-bike-gear" className="text-black font-bold">
            Premium Bike Gear
          </Link>
          <Link href="/leatherBags" className="text-black font-bold">
            Leather Bags
          </Link>
          <Link href="/jackets" className="text-black font-bold">
            Jackets
          </Link>
          <Link href="/customized-order" className="text-black font-bold">
            Customized Order
          </Link>
          <Link href="/contactUs">
            <button className="bg-[#935217] hover:bg-[#cb7120] text-white px-4 py-2 rounded-md">Contact Us</button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleMenu}></div>}
    </nav>
  )
}

