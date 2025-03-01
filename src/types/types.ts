export interface WorkType {
    title:string,
    company:string
    img:string,
    date:string,
    link:string
}
export interface ProjectProps {
    title: string;
    role: string;
    img: string;
    link: string;
    github?: string; // Optional GitHub link
    desc: string;
    techStack: string[];
  }
  