'use client';

import { useState } from 'react';
import { upcomingInfo } from '../constants';
import { EventCard, SectionHeader } from '../components';

const UpcomingEvents = () => {
  const [active, setActive] = useState('upcoming-3');

  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12`} id="upcoming">
      <div className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}>
        
        {/* Section header */}
        <SectionHeader title={upcomingInfo.header.title} heading={upcomingInfo.header.heading} subText={upcomingInfo.header.subText} textStyle={'text-center'} />

        {/* Upcoming Cards */}
        <div className="mt-[50px] flex flex-wrap lg:flex-row flex-col min-h-[70vh] gap-5">
          {upcomingInfo.upcomingCardsInfo.map((event, index) => (
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

export default UpcomingEvents;
