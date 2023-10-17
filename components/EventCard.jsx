'use client';

import Image from 'next/image'

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { TfiMore } from 'react-icons/tfi';


const EventCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[4] flex-[10]' : 'lg:flex-[1] flex-[2]'
    } flex items-center justify-center w-full h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt="planet-04"
      width={500}
      height={500}
      className={`absolute w-full h-full ${active === id ? 'object-cover' :'lg:object-contain object-cover' } lg:object-left rounded-[24px]`}
    />
    {active !== id ? (
      null
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`flex justify-center items-center w-[60px] h-[60px] rounded-[24px] mb-[16px] bg-lime-500 hover:scale-110`}
        >
          <TfiMore />
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Read More
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default EventCard;
