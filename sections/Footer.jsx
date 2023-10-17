import {footerSubText, footerLinks, socialMedia, brandName } from "../constants";
import { BiMessage } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer id="footer" className='w-full sm:px-16 px-8 py-12 border-t border-solid border-white '>
      <div className='text-white max-container flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a 
            href="/" 
            className="relative"
          >
            <BiMessage className="w-[50%] h-[55px] max-sm:h-[43px] text-lime-500 absolute opacity-90"/>
            <span className="text-white text-[32px] max-sm:text-[24px] font-BlackOpsOne font-medium relative left-[24px] max-sm:left-[18px]">
              {brandName}
            </span>
          </a>
          <p className='mt-6 sm:max-w-sm text-slate-300 max-sm:text-base text-lg font-palanquin'>
            {footerSubText}
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-lime-500 rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-palanquin text-[28px] leading-normal font-bold mb-6'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 text-slate-300 max-sm:text-sm text-base font-palanquin hover:text-lime-500'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
