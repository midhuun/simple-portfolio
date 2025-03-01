import { ProjectProps } from "@/types/types";
import Image from "next/image";

const ProjectCard = ({ title, role, img, link, desc, techStack }:ProjectProps) => {
  return (
    <div className="bg-[#1e1e1e] p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-2 duration-300">
      {/* Image Section */}
      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{role}</p>

        <p className="text-gray-300 text-sm mt-2">{desc}</p>

        {/* Tech Stack */}
        <div className="mt-3 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-gray-800 text-gray-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 font-semibold inline-block w-full text-center bg-white   py-2 rounded-lg text-gray-800 transition-all duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
