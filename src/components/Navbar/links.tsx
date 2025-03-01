import Link from 'next/link';
import './navbar.css';
const Links = () =>{
  return (
    <div className="links flex text-sm md:text-md">
        <Link href='/'>
        <p className="p-2 select-none cursor-pointer hover:text-[white] transition-all duration-300 text-[#b4b4b4]">Home</p>
        </Link>
        <Link href='/work'>
        <p className="p-2 select-none cursor-pointer hover:text-[white] transition-all duration-300 text-[#b4b4b4]">Freelance</p>
        </Link>
        <Link href='/about'>
        <p className="p-2 select-none cursor-pointer hover:text-[white] transition-all duration-300 text-[#b4b4b4]">About</p>
        </Link>
        <Link href='/contact'>
        <p className="p-2 select-none cursor-pointer hover:text-[white] transition-all duration-300 text-[#b4b4b4]">Contact</p>
        </Link>
       
    </div>
  )
}
export default Links