'use client';

import { useState } from 'react';
import { portfolioInfo } from '../constants';
import { EventCard, SectionHeader } from '../components';

const Portfolio = () => {
  const [active, setActive] = useState('portfolio-3');
  return (
    <section id='portfolio' className={`sm:p-16 px-6 py-12`}>
      <div className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}>
       
        {/* Section header */}
        <SectionHeader title={portfolioInfo.header.title} heading={portfolioInfo.header.heading} subText={portfolioInfo.header.subText} textStyle={'text-center'} />

        {/* Portfolio Cards */}
        <div className="mt-[50px] flex flex-wrap lg:flex-row flex-col min-h-[70vh] gap-5">
          {portfolioInfo.portfolioCardsInfo.map((event, index) => (
            <EventCard
              key={event.id}
              {...event}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
