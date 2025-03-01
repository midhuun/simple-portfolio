const Footer = () => {
    return (
      <footer className="w-full flex justify-center py-4 ">
        <div className="max-w-[650px] w-full text-center text-white text-sm">
        <div className="h-[1px] w-full mb-7 bg-slate-900"></div>
          <p>© {new Date().getFullYear()} Midhun Kumar. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  