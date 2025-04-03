'use client';
import { useState, useEffect, useRef } from 'react';
import { ProjectProps } from '@/types/types';
import { projects } from '@/utils/projects';
import ProjectCard from './project';
import { motion } from 'framer-motion';
import { testimonials } from '@/utils/testimonials';
import Testimonial from './testimonialCard';

const FreelanceProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  let intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start infinite scrolling animation
  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Changes every 3s
  };

  // Pause scrolling when hovered
  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll(); // Cleanup on unmount
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }} // Start blurred, small & hidden
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} // Smoothly appear, scale up & remove blur
      transition={{ duration: 1.5, ease: 'easeOut' }} // Smooth cinematic transition
    >
      {/* Freelance Projects Section */}
      <div className="mt-12 w-full flex justify-center md:mt-28">
        <div className="max-w-[650px] flex flex-col">
          <h1 className="md:text-5xl p-3 text-2xl font-bold text-start">My Freelance Works</h1>
          <div className="grid grid-cols-1 p-3 gap-6">
            {projects.map((project: ProjectProps) => (
              <ProjectCard
                role={project.role}
                desc={project.desc}
                key={project.title}
                title={project.title}
                link={project.link}
                img={project.img}
                techStack={project.techStack}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="w-full flex flex-col items-center p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What My Clients Say</h2>
        <div
          className="relative overflow-hidden w-full max-w-[650px]"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div
            ref={carouselRef}
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((review, index) => (
              <Testimonial
                key={index}
                company={review.company}
                name={review.name}
                desc={review.desc}
                img={review.img}
              />
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="mt-4 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-[var(--foreground)] scale-125'
                  : 'bg-[var(--secondary)] opacity-50'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FreelanceProjects;
