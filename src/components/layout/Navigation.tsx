import React from 'react'
import { Button } from '@/components/ui/Button'

export const Navigation = () => {
  return (
    <div className="flex gap-[27px] fixed -translate-x-2/4 backdrop-blur-[15px] bg-[rgba(255,255,255,0.4)] px-6 py-5 rounded-[100px] left-2/4 top-4 z-50 max-sm:hidden">
      <Button variant="ghost" className="text-sm font-bold text-black">Benefits</Button>
      <Button variant="ghost" className="text-sm font-bold text-black">Specifications</Button>
      <Button variant="ghost" className="text-sm font-bold text-black">How-to</Button>
      <Button variant="ghost" className="text-sm font-bold text-black">Contact Us</Button>
    </div>
  )
}
