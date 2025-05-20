import React from 'react'

const BenefitCard = ({ icon, title, description }) => (
  <div className="flex-[1_0_265px] min-w-[265px] flex flex-col gap-6 pl-0 pr-5 py-10 border-t-[#E9E9E9] border-t border-solid">
    <div dangerouslySetInnerHTML={{ __html: icon }} />
    <div className="flex flex-col gap-5">
      <h4 className="text-lg text-black">{title}</h4>
      <p className="text-[15px] text-[#6F6F6F]">{description}</p>
    </div>
  </div>
)

export const Benefits = () => {
  const benefits = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.05305 3.4998C5.68305 4.8798 5.68305 7.0998 7.05305 8.4698L15.543 16.9498C16.123 17.5398 16.123 18.4998 15.543 19.0698C14.953 19.6598 14.003 19.6598 13.413 19.0698L9.17305 14.8298L10.233 13.7698L6.70305 10.2298L6.34305 10.5898L4.93305 9.1698C4.54305 8.7798 3.91305 8.7798 3.50305 9.1698L2.10305 10.5898C1.71305 10.9998 1.71305 11.6098 2.10305 11.9998L3.50305 13.4098L3.16305 13.7698L6.70305 17.2998L7.76305 16.2398L12.003 20.4998C13.373 21.8498 15.583 21.8498 16.953 20.4998C18.323 19.1198 18.323 16.8998 16.953 15.5398L8.46305 7.0498C7.88305 6.4598 7.88305 5.4998 8.46305 4.9298C9.05305 4.3398 10.003 4.3398 10.593 4.9298L14.833 9.1698L13.773 10.2298L17.303 13.7698L17.663 13.4098L19.073 14.8298C19.463 15.2198 20.103 15.2198 20.503 14.8298L21.903 13.4098C22.293 12.9998 22.293 12.3898 21.903 11.9998L20.503 10.5898L20.843 10.2298L17.303 6.6998L16.243 7.7598L12.003 3.4998C10.633 2.1498 8.42305 2.1498 7.05305 3.4998ZM2.81305 11.2898L4.22305 9.8798L5.64305 11.2898L4.22305 12.7098M18.363 12.7098L19.783 11.2898L21.193 12.7098L19.783 14.1198L18.363 12.7098Z" fill="black"/></svg>`,
      title: "Amplify Insights",
      description: "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth."
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 17.39C17.64 16.59 16.89 16 16 16H15V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H8V10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5V4.59C17.93 5.77 20 8.64 20 12C20 14.08 19.2 15.97 17.9 17.39ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.78 4.21 10.21L9 15V16C9 16.5304 9.21071 17.0391 9.58579 17.4142C9.96086 17.7893 10.4696 18 11 18M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="black"/></svg>`,
      title: "Control Your Global Presence",
      description: "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere."
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5.00024C10.0609 5.00024 11.0783 5.42167 11.8284 6.17182C12.5786 6.92196 13 7.93938 13 9.00024C13 10.0611 12.5786 11.0785 11.8284 11.8287C11.0783 12.5788 10.0609 13.0002 9 13.0002C7.93913 13.0002 6.92172 12.5788 6.17157 11.8287C5.42143 11.0785 5 10.0611 5 9.00024C5 7.93938 5.42143 6.92196 6.17157 6.17182C6.92172 5.42167 7.93913 5.00024 9 5.00024ZM9 15.0002C11.67 15.0002 17 16.3402 17 19.0002V21.0002H1V19.0002C1 16.3402 6.33 15.0002 9 15.0002ZM16.76 5.36024C18.78 7.56024 18.78 10.6102 16.76 12.6302L15.08 10.9402C15.92 9.76024 15.92 8.23024 15.08 7.05024L16.76 5.36024ZM20.07 2.00024C24 6.05024 23.97 12.1102 20.07 16.0002L18.44 14.3702C21.21 11.1902 21.21 6.65024 18.44 3.63024L20.07 2.00024Z" fill="black"/></svg>`,
      title: "Remove Language Barriers",
      description: "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience."
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 14L3.5 14.07L8.07 9.5C7.89 8.85 8.06 8.11 8.59 7.59C9.37 6.8 10.63 6.8 11.41 7.59C11.94 8.11 12.11 8.85 11.93 9.5L14.5 12.07L15 12C15.18 12 15.35 12 15.5 12.07L19.07 8.5C19 8.35 19 8.18 19 8C19 7.46957 19.2107 6.96086 19.5858 6.58579C19.9609 6.21071 20.4696 6 21 6C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8C23 8.53043 22.7893 9.03914 22.4142 9.41421C22.0391 9.78929 21.5304 10 21 10C20.82 10 20.65 10 20.5 9.93L16.93 13.5C17 13.65 17 13.82 17 14C17 14.5304 16.7893 15.0391 16.4142 15.4142C16.0391 15.7893 15.5304 16 15 16C14.4696 16 13.9609 15.7893 13.5858 15.4142C13.2107 15.0391 13 14.5304 13 14L13.07 13.5L10.5 10.93C10.18 11 9.82 11 9.5 10.93L4.93 15.5L5 16C5 16.5304 4.78929 17.0391 4.41421 17.4142C4.03914 17.7893 3.53043 18 3 18C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16C1 15.4696 1.21071 14.9609 1.58579 14.5858C1.96086 14.2107 2.46957 14 3 14Z" fill="black"/></svg>`,
      title: "Visualize Growth",
      description: "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions."
    }
  ]

  return (
    <section className="max-w-[1500px] w-full pb-[120px]">
      <div className="flex flex-col gap-[50px] pt-20 pb-[60px] px-0 border-t-[0.5px] border-t-[#E9E9E9] border-solid max-sm:px-0 max-sm:py-10">
        <span className="text-xs text-[#485C11]">Benefits</span>
        <h3 className="text-6xl leading-[54px] tracking-[-1.8px] text-black">
          We've cracked the code.
        </h3>
        <p className="text-[15px] text-[#6F6F6F]">
          Area provides real insights, without the data overload.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 pt-10 max-md:flex-col">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da58677f202886a3267744888f9fd23d7aa2e42"
        className="w-full h-[620px] object-cover rounded-[30px]"
        alt="Data visualization"
      />
    </section>
  )
}
