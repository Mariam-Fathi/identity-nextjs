'use client';
import Image from "next/image";
import { whyChooseUsInfo } from '../constants';
import { SectionHeader } from "../components";

const WhyChooseUs = () => (
  <section className={`sm:px-16 px-8 relative z-10 mt-16`}>
    <div className={`min-h-screen relative flex justify-center max-lg:flex-col gap-20`}>
      
      {/* Image */}
      <div className={`relative w-1/2 max-lg:w-[90%] h-screen max-lg:h-[400px] flex-1`}>
        <Image
          src={whyChooseUsInfo.imgUrl}  
          alt="" 
          width={500}
          height={500}
          className="h-full w-full max-lg:h-[400px] object-cover max-lg:object-center relative top-12 max-lg:left-8 z-20"
        />
        <div className='h-full w-full absolute max-lg:left-0 right-8 bottom-0 border-2 border-lime-500 border-solid' />
      </div>
      
      <div className="text-white flex flex-col items-start gap-4 flex-1 max-lg:mt-10 max-w-md max-lg:max-w-xl">
        
        {/* Header */}
        <SectionHeader title={whyChooseUsInfo.header.title} heading={whyChooseUsInfo.header.heading} subText={whyChooseUsInfo.header.subText} />

        {/* Features */}
        <div className="flex flex-col items-start gap-4 mb-10 mt-4 max-w-full">
          {whyChooseUsInfo.features.map((feature) => (
            <div 
              key={feature.label}
              className="flex items-center gap-4"
            >
              {feature.icon}
              <p 
                className=" text-slate-200 max-sm:text-base text-lg tracking-widest max-sm:tracking-wide font-semibold font-palanquin hover:text-lime-500"
              > 
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
