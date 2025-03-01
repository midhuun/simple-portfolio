import { TestimonialType } from "@/types/types";

const Testimonial = (testimonial:TestimonialType) => {
    return (
       <div className="testimonial p-3 min-w-full rounded-md text-[var(--secondary) bg-[var(--work-bg)] min-h-[200px]">
        <div className="flex in-checked: gap-3">
            <img src={testimonial.img} alt="Testimonial Image" className="w-8 h-8 object-cover rounded-full" />
            <h3 className="font-semiold my-2 text-white">{testimonial.name}</h3>
        </div>
        <p className="tracking-wider leading-8">{testimonial.desc}</p>
       </div>
    )
}
export default Testimonial;