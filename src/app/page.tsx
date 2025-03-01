"use client"; // Ensure this runs only on the client-side
import Info from "@/components/Navbar/Home/home";
import { motion } from "framer-motion";


const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }} // Start blurred, small & hidden
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} // Smoothly appear, scale up & remove blur
      transition={{ duration: 1.5, ease: "easeOut" }} // Smooth cinematic transition
      className="min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }} // Start below
        animate={{ opacity: 1, y: 0 }} // Moves up smoothly
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }} // Delayed for better effect
        className="relative w-full flex justify-center md:mt-28 mt-12"
      >
       
        <Info />
      </motion.div>
    </motion.div>
  );
};

export default Page;
