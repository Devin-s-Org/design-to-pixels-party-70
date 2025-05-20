import React from 'react'

export const Partners = () => {
  return (
    <section className="max-w-[1500px] flex flex-col items-center gap-[30px] w-full px-0 py-[50px]">
      <h3 className="text-[15px] text-[#6F6F6F]">Trusted by:</h3>
      <div className="flex flex-wrap justify-center items-center gap-[40px_20px] max-sm:gap-5">
        {[2, 3, 10, 11, 12, 13].map((num) => (
          <div key={num} className="w-[154px] h-[84px] flex justify-center items-center p-5">
            <img
              src={`URL_${num}`}
              className="w-full h-full opacity-60 mix-blend-exclusion"
              alt="Partner logo"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
