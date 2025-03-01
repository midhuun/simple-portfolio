import { ProjectProps } from "@/types/types"
import { projects } from "@/utils/projects"
import ProjectCard from "./project"
import {motion} from 'framer-motion';
const FreelanceProjects = () =>{
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }} // Start blurred, small & hidden
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} // Smoothly appear, scale up & remove blur
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth cinematic transition
        className=""
      >
        <div className="mt-12 w-full flex justify-center md:mt-28 ">
  <div className="max-w-[650px] flex flex-col">
    <h1 className="md:text-5xl p-3 text-2xl font-bold text-start">My Freelance Works</h1>
    <div className="grid grid-cols-1 p-3 gap-6">
        {projects.map((project:ProjectProps)=>
        <ProjectCard role={project.role} desc={project.desc} key={project.title} title={project.title} link={project.link} img={project.img} techStack={project.techStack} />
        )}
</div>
    </div>
    </div>
    </motion.div>
    )
}
export default FreelanceProjects