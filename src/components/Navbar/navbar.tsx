import Links from './links'

const Navbar = () =>{
return(
  
    <div className="p-2 fixed top-0 z-[1000] !bg-[var(--background)] flex justify-between  gap-1 overflow-hidden w-full md:gap-3">
    <div className="flex bg-[var(--primary)] items-center">
        <div className="h-7 w-7 mr-2 md:mr-10 shadow-md overflow-hidden">
            <h1 className="text-xl h-10  w-10 font-bold text-[var(--logo)]">M</h1>
        </div>
    </div>
    <Links/>
    </div>
    
)
}
export default Navbar;