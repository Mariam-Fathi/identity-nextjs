'use client'

import { SectionHeader } from '../components';
import { pricingPlanInfo } from '../constants';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';


export default function PricingPlan() {
  return (
    <section id="pricing-plan">
      <div className={`2xl:max-w-[1280px] w-full max-w-6xl mx-auto px-4 sm:px-6`}>
        <div className="py-12 md:py-20">

          {/* Section header */}
          <SectionHeader title={pricingPlanInfo.header.title} heading={pricingPlanInfo.header.heading} subText={pricingPlanInfo.header.subText} textStyle={'text-center pb-12 md:pb-20'} />
          
          {/* Pricing Plan Cards */}
          <div className='flex justify-center'>
            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-16 items-start lg:max-w-none">
                {pricingPlanInfo.pricingPlanCardsInfo.map((plan) => (
                  <div 
                    key={plan.label}
                    className="flex flex-col justify-center items-center h-full p-14 shadow-2xl shadow-lime-900 border-2 border-lime-500 border-opacity-60"
                  >
                    <h4 className="text-2xl text-center font-bold leading-snug tracking-tight mb-2 text-white ">{plan.label}</h4>
                    <p className="text-base text-gray-400 text-center">{plan.subText}</p>
                    <p className="md:text-7xl text-6xl max-sm:text-5xl font-bold leading-snug tracking-tight text-lime-500">{plan.price}</p>
                    <ul
                      className='flex flex-col items-center gap-2 mt-6'
                    >
                      {plan.details.map((item) => (
                        <li 
                          key={item}
                          className='flex items-center gap-1 text-base font-bold leading-snug tracking-tight text-slate-300'
                        >
                          <MdKeyboardDoubleArrowRight className='text-lime-500'/>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button
                      className='text-white hover:bg-lime-500 hover:bg-opacity-60 hover:scale-110 text-sm text-extrabold border-2 border-solid rounded-full border-lime-500 px-6 py-2 mt-10'
                    >
                    {plan.button}
                    </button>
                  </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
