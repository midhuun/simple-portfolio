import { WorkType } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
const Work = ({title,company,img,date,link}:WorkType) =>{
    return (
        <Link href={link}>
        <div className="p-2 bg-[var(--work-bg)] flex flex-col justify-between  rounded-md h-[150px] md:h-[150px]">
            <div className="flex gap-3">
                <Image height={20} width={20} className="w-7 h-7 object-cover rounded-full" src={img} alt={company} />
                <h2 className="text-md md:text-md font-semibold ">{title}</h2>
            </div>
            <div className=" space-y-1">
                <p className="text-[var(--secondary)]">{company}</p>
                <p className="text-[var(--secondary)] md:text-sm text-[12px]">{date}</p>
            </div>
        </div>
        </Link>
    )
}
export default Work;