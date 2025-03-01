"use client";
import Link from 'next/link';
import './navbar.css';
import { usePathname } from 'next/navigation';
const Links = () =>{
    const path = usePathname();
    console.log(path);
  return (
    <div className="links flex gap-1 text-sm md:text-md">
        <Link href='/'>
        <p className={`p-1 select-none cursor-pointer rounded-md hover:text-[white] ${path === '/' ?"bg-[#393939] text-[white]":"text-[#b4b4b4]"} hover:bg-[#393939] transition-all duration-300 `}>Home</p>
        </Link>
        <Link href='/work'>
        <p className={`p-1 select-none cursor-pointer rounded-md hover:text-[white] ${path === '/work' ?"bg-[#393939] text-[white]":"text-[#b4b4b4]"} hover:bg-[#393939] transition-all duration-300 `}>Freelance</p>
        </Link>
        <Link href='/about'>
        <p className={`p-1 select-none cursor-pointer rounded-md hover:text-[white] ${path === '/about' ?"bg-[#393939] text-[white]":"text-[#b4b4b4]"} hover:bg-[#393939] transition-all duration-300 `}>About</p>
        </Link>
        <Link href='/contact'>
        <p className={`p-1 select-none cursor-pointer rounded-md hover:text-[white] ${path === '/contact' ?"bg-[#393939] text-[white]":"text-[#b4b4b4]"} hover:bg-[#393939] transition-all duration-300`}>Contact</p>
        </Link>
       
    </div>
  )
}
export default Links