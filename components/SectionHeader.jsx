import React from 'react'

const SectionHeader = ({title, heading, subText, textStyle}) => {
  return (
  <div className={`max-w-3xl mx-auto ${textStyle}`}>
    <p className="text-lime-500 tracking-[0.2em] font-semibold max-sm:text-base text-xl uppercase">{title}</p>    
    <h2 className="text-white font-bold max-sm:text-3xl max-xl:text-5xl text-6xl tracking-wide mb-4">{heading}</h2>
    <p className="text-slate-300 max-sm:text-base text-lg font-palanquin break-words">{subText}</p>
  </div>
  )
}

export default SectionHeader