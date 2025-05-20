import React from 'react'
import { Button } from '@/components/ui/Button'

const ProcessStep = ({ number, title, description }) => (
  <div className="flex-1 min-w-60 flex flex-col gap-[60px] pl-0 pr-[30px] pt-[60px] pb-5 border-t-[#E9E9E9] border-t border-solid">
    <div className="text-[80px] text-[#CECECE]">{number.padStart(2, '0')}</div>
    <div className="flex flex-col gap-5">
      <h4 className="text-lg text-black">{title}</h4>
      <p className="text-[15px] text-[#6F6F6F]">{description}</p>
    </div>
  </div>
)

export const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Get Started",
      description: "With our intuitive setup, you're up and running in minutes."
    },
    {
      number: "2",
      title: "Customize and Configure",
      description: "Adapt Area to your specific requirements and preferences."
    },
    {
      number: "3",
      title: "Grow Your Business",
      description: "Make informed decisions to exceed your goals."
    }
  ]

  return (
    <section className="max-w-[1500px] w-full pt-20 pb-[120px] px-0 border-t-[#E9E9E9] border-t border-solid">
      <div className="flex justify-between items-start mb-20">
        <h3 className="text-6xl leading-[54px] tracking-[-1.8px] text-black">
          Map Your Success
        </h3>
        <Button variant="pill" size="custom">
          Discover More
        </Button>
      </div>
      <div className="flex gap-5 max-md:flex-col">
        {steps.map((step) => (
          <ProcessStep key={step.number} {...step} />
        ))}
      </div>
    </section>
  )
}
