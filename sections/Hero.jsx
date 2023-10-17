import Image from 'next/image';
import { heroInfo } from '../constants';

const Hero = () => {
  return (
    <section id="hero">
      <div className='flex flex-col items-center min-h-screen w-full'> 

        {/* Section header */}
        <div className="w-full relative flex flex-col items-center border-b-2 border-solid border-white pb-[200px]">
          <Image 
            src={heroInfo.imgUrl} 
            alt="hero image" 
            width={1500} 
            height={1500} 
            className="h-full w-full absolute object-cover" 
          />
          <div className='hero-gradient absolute w-full h-full opacity-60'/>
          <div className='relative h-full max-w-[1440px] mx-auto flex flex-col items-center z-10 max-sm:mt-20 lg:max-w-[85%] max-sm:max-w-[95%]'>
            <p
              className='font-semibold font-montserrat tracking-[6px] text-xl max-sm:text-xs text-lime-500 mb-4 max-sm:mb-6 sm:mt-10'
            >
              {heroInfo.header.title}
            </p>
            <h2 
              className= "px-4 max-sm:px-2 font-semibold font-Kanit tracking-widest text-white text-center xl:text-[90px] xl:leading-[110px] lg:text-[82px] lg:leading-[92px] md:text-[70px] md:leading-[80px] sm:text-[52px] leading-[70px] max-sm:text-[34px] max-sm:leading-[40px]"
            >
              {heroInfo.header.heading}
            </h2>
            <p className='text-slate-300 text-center font-medium font-montserrat tracking-wide text-xs sm:text-base md:text-lg xl:text-xl px-6 lg:max-w-[80%] my-4'>
              {heroInfo.header.subText}
            </p>
          </div>
        </div>

        {/* Hero Cards */}
        <div className='relative bottom-[150px] max-sm:bottom-[150px] max-w-[1440px] mx-auto flex justify-center max-lg:flex-col max-lg:items-center gap-10 px-8'>
          {heroInfo.heroCardsInfo.map ((card) => (
            <div 
              key={card.heading}
              className='flex flex-col items-center justify-center max-lg:w-full bg-black border-2 border-white border-solid py-10 px-10'
            >
              {card.icon}
              <h2 className='text-2xl max-md:text-xl text-white text-center tracking-widest font-semibold font-montserrat mt-2'>
                {card.heading}
              </h2>
              <p className='text-center text-base max-md:text-sm max-w-xs tracking-wide text-slate-300 font-palanquin mt-4'>
                {card.subText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
