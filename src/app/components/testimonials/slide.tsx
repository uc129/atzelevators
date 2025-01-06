import { Testimonial } from "@/app/constants/testimonials";

const TestimonialSlide = ({ testimonial }: { testimonial: Testimonial }) => {

    return (
        <div className="w-screen">

            <div className="top">
                <h5>{testimonial.client}</h5>
            </div>
            <div className="center">
                <p>{testimonial.quote}</p>
            </div>

            <div className="bottom flex justify-end gap-1 items-center">
                <div className="h-[1px] w-[8px] "></div>
                <p className="">{testimonial.author} </p>
            </div>

        </div>
    )

}

export default TestimonialSlide;