import React from 'react'
import { Button } from '@/components/ui/Button'

export const Hero = () => {
  return (
    <section className="w-full max-w-[1500px] pt-5 pb-20 px-0">
      <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-5">
        <h1 className="text-3xl font-medium tracking-[-1.5px] text-black">
          Area
        </h1>
        <Button variant="green" size="custom" className="flex items-center gap-0.5">
          Learn More
          <svg width="7" height="20" viewBox="0 0 7 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.01037 11.9878V8.04622L5.64939 8.08581L0.735155 13.0057L0 12.2705L4.91423 7.35631L4.96513 7.99533H1.0066V6.99438L6 7.00569V11.9878H5.01037Z" fill="white"/>
          </svg>
        </Button>
      </div>
      <div className="max-w-[1500px] flex flex-col gap-60 w-full">
        <h2 className="text-[160px] leading-[136px] tracking-[-8px] text-center text-black max-md:text-[100px] max-sm:text-6xl">
          Browse everything.
        </h2>
        <div className="flex justify-center items-center h-[362px] relative bg-[#8E9C78] px-[146px] py-0 rounded-[30px]">
          <div className="w-[907px] h-[644px] flex justify-center items-center absolute bg-black p-[18px] rounded-3xl border-b-[none] border-2 border-solid border-[rgba(255,255,255,0.5)] top-[235px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/63818869ffaec8b2103e359cc8dc926feb7a9f4a"
              className="w-[870px] h-[607px] rounded-2xl"
              alt="Dashboard interface"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
