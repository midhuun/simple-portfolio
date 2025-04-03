'use client';
import Link from 'next/link';
import './navbar.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Links = () => {
  const path = usePathname();
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="links hidden md:flex gap-1 text-sm md:text-md">
        {['/', '/work', '/about', '/contact'].map((route, index) => (
          <Link key={index} href={route}>
            <p
              className={`p-2 select-none cursor-pointer rounded-md hover:text-white ${
                path === route ? 'bg-[#393939] text-white' : 'text-[#b4b4b4]'
              } hover:bg-[#393939] transition-all duration-300`}
            >
              {route === '/' ? 'Home' : route.substring(1).charAt(0).toUpperCase() + route.slice(2)}
            </p>
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <div onClick={() => setisMenuOpen(true)} className="md:hidden mt-2 mr-2 cursor-pointer">
        <div className="h-[2px] mb-1 w-6 bg-[var(--logo)]"></div>
        <div className="h-[2px] mb-1 w-6 bg-[var(--logo)]"></div>
        <div className="h-[2px] mb-1 w-6 bg-[var(--logo)]"></div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'
        } fixed inset-0 transform duration-500 min-h-screen z-[100] bg-[var(--background)] flex flex-col justify-center items-center gap-6 text-lg`}
      >
        {/* Close Button */}
        <div
          onClick={() => setisMenuOpen(false)}
          className="absolute top-4 right-4 cursor-pointer text-white"
        >
          <IoMdClose size={36} />
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col gap-4">
          {['/', '/work', '/about', '/contact'].map((route, index) => (
            <Link onClick={() => setisMenuOpen(false)} key={index} href={route}>
              <p
                className={`text-white text-2xl font-medium hover:underline ${
                  path === route ? 'underline' : ''
                }`}
              >
                {route === '/'
                  ? 'Home'
                  : route.substring(1).charAt(0).toUpperCase() + route.slice(2)}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Links;
