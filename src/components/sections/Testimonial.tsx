import React from 'react'

export const Testimonial = () => {
  return (
    <section className="flex max-w-[1500px] gap-5 w-full pb-[120px] max-md:flex-col">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9976114e840ce503daf7328518b31f0cbaa7593"
        className="flex-1 h-[669px] object-cover rounded-[30px]"
        alt="Testimonial"
      />
      <div className="flex-1 flex flex-col justify-center gap-[50px] pl-[50px] border-t-[#E9E9E9] border-t border-solid max-md:pt-10">
        <blockquote className="text-[40px] leading-[42px] tracking-[-1.6px] text-black">
          "I was skeptical, but Area has completely transformed the way I
          manage my business. The data visualizations are so clear and
          intuitive, and the platform is so easy to use. I can't imagine
          running my company without it."
        </blockquote>
        <div className="flex flex-col gap-2">
          <div className="text-[15px] text-black">John Smith</div>
          <div className="text-xs text-[#485C11]">Head of Data</div>
        </div>
      </div>
    </section>
  )
}
