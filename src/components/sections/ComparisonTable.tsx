import React from 'react'
import { Button } from '@/components/ui/Button'

const CheckIcon = ({ color = "#485C11" }) => (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.25 4.58324L5.25002 11.5832L2.04169 8.37491L2.86419 7.55241L5.25002 9.93241L11.4275 3.76074L12.25 4.58324Z" fill={color}/>
  </svg>
)

const CloseIcon = () => (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.85167 7.49999L11.0833 10.7317V11.5833H10.2317L7 8.35166L3.76834 11.5833H2.91667V10.7317L6.14834 7.49999L2.91667 4.26832V3.41666H3.76834L7 6.64832L10.2317 3.41666H11.0833V4.26832L7.85167 7.49999Z" fill="#6F6F6F"/>
  </svg>
)

const ComparisonColumn = ({ title, features, isArea = false }) => (
  <div className="flex flex-1 min-w-[200px] flex-col">
    <div className="h-24 text-[26px] text-black px-[30px] py-10 border-b-[#CECECE] border-b border-solid">
      {title}
    </div>
    {features.map((feature, index) => (
      <div key={index} className="flex gap-2 items-center px-[30px] py-8 border-b-[0.5px] border-b-[#E9E9E9] border-solid">
        <div>
          {feature.available ? 
            <CheckIcon color={isArea ? "#485C11" : "#6F6F6F"} /> : 
            <CloseIcon />
          }
        </div>
        <div className="text-xs text-black flex-1">{feature.text}</div>
      </div>
    ))}
  </div>
)

export const ComparisonTable = () => {
  const areaFeatures = [
    { text: "Ultra-fast browsing", available: true },
    { text: "Advanced AI insights", available: true },
    { text: "Seamless integration", available: true },
    { text: "Advanced AI insights", available: true },
    { text: "Ultra-fast browsing", available: true },
    { text: "Full UTF-8 support", available: true }
  ]

  const webSurgeFeatures = [
    { text: "Fast browsing", available: true },
    { text: "Basic AI recommendations", available: true },
    { text: "Restricts customization", available: true },
    { text: "Basic AI insights", available: false },
    { text: "Fast browsing", available: true },
    { text: "Potential display errors", available: false }
  ]

  const hyperViewFeatures = [
    { text: "Moderate speeds", available: false },
    { text: "No AI assistance", available: false },
    { text: "Steep learning curve", available: false },
    { text: "No AI assistance", available: false },
    { text: "Moderate speeds", available: false },
    { text: "Partial UTF-8 support", available: false }
  ]

  return (
    <section className="max-w-[1500px] w-full pb-[120px]">
      <div className="flex flex-col items-center gap-10 text-center px-60 py-20 border-t-[#CECECE] border-t border-solid max-md:px-[120px] max-md:py-[60px] max-sm:px-5 max-sm:py-10">
        <span className="text-xs text-[#485C11]">Specs</span>
        <h3 className="text-6xl leading-[54px] tracking-[-1.8px] text-black">
          Why Choose Area?
        </h3>
        <p className="text-[15px] text-[#6F6F6F]">
          You need a solution that keeps up. That's why we developed Area. A
          developer-friendly approach to streamline your business.
        </p>
        <Button variant="pill" size="custom" className="self-start">
          Discover More
        </Button>
      </div>
      <div className="flex w-full max-md:flex-col max-md:gap-5">
        <ComparisonColumn title="Area" features={areaFeatures} isArea={true} />
        <ComparisonColumn title="WebSurge" features={webSurgeFeatures} />
        <ComparisonColumn title="HyperView" features={hyperViewFeatures} />
      </div>
    </section>
  )
}
