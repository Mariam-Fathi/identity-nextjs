'use client';

import Image from "next/image";
import { aboutInfo } from "../constants";
import { AiOutlineDoubleRight } from '../public/icons';
import { SectionHeader } from "../components";

const About = () => (
  <section id="about" className={`sm:px-16 px-8 relative z-10`}>
    <div className={`min-h-screen relative flex justify-center max-lg:flex-col-reverse gap-20`}>
      <div className="text-white flex flex-col items-start gap-4 flex-1 max-lg:mt-10 max-w-md max-lg:max-w-xl">

        {/* Header */}
        <SectionHeader title={aboutInfo.header.title} heading={aboutInfo.header.heading} subText={aboutInfo.header.subText} />

        {/* Features */}
        <div className="flex flex-col items-start gap-4 mb-10 mt-4 max-w-full">
          {aboutInfo.features.map((feature,index) => (
            <div 
              key={index}
              className="flex items-center gap-2"
            >
              <AiOutlineDoubleRight className="text-lime-500 w-3 h-3" />
              <p className="text-slate-200 max-sm:text-base text-lg tracking-widest max-sm:tracking-wide font-semibold font-palanquin hover:text-lime-500"> 
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image */}
      <div className={`relative w-1/2 max-lg:w-[90%] h-screen flex-1`}>
        <Image
          src={aboutInfo.imgUrl}  
          alt="" 
          width={500}
          height={500}
          className="h-full w-full max-lg:h-[600px] object-cover max-lg:object-center relative top-12 max-lg:left-8 z-20"
        />
        <div className='h-full w-full absolute max-lg:left-0 right-8 bottom-0 border-2 border-lime-500 border-solid' />
      </div>
    </div>
  </section>
);

export default About;
