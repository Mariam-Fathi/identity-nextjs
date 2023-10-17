'use client'

import { SectionHeader } from '../components';
import { servicesInfo, servicesSectionHeader } from '../constants';


export default function Services() {
  return (
    <section id="services">
      <div 
        className={`2xl:max-w-[1280px] w-full max-w-6xl mx-auto px-4 sm:px-6`}
      >
        <div
          className="py-12 md:py-20"
        >
          {/* Section header */}
          <SectionHeader title={servicesInfo.header.title} heading={servicesInfo.header.heading} subText={servicesInfo.header.subText} textStyle={'text-center pb-12 md:pb-20'}/>
          
          {/* Features */}
          <div className="mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
              {servicesInfo.features.map((service) => (
                <div 
                  key={service.heading}
                  className="relative flex flex-col items-center max-xl:px-6 max-md:px-10 px-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]"
                >
                  {service.icon}
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-2 text-white">{service.heading}</h4>
                  <p className="text-slate-300 max-sm:text-base text-lg font-palanquin text-center">{service.subText}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
