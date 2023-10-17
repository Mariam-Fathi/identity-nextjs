import { heroCardIconStyle, whyChooseUsIconStyle } from '../styles';
import {IoPeopleOutline, PiBuildingsThin, GiGlassCelebration, AiOutlineTeam,HiMiniBuildingStorefront,GiThink,FaPeopleRobbery, servicesSvg } from '../public/icons';
import { heroImg,aboutImg,whyChooseUsImg,PortfolioImage01,PortfolioImage02,PortfolioImage03,PortfolioImage04,PortfolioImage05,UpcomingImage01,UpcomingImage02,UpcomingImage03,UpcomingImage04,UpcomingImage05,TestimonialImage01,TestimonialImage02,TestimonialImage03 } from '../public/images';

{/* Logo */}
export const brandName= 'identity';

{/* Navbar Section */}
export const navLinks= [
  {'href':'#about' , 'label':'ABOUT' },
  {'href':'#services' , 'label':'SERVICES' },
  {'href':'#upcoming' , 'label':'UPCOMING' },
  {'href':'#portfolio' , 'label':'PORTFOLIO' },
  {'href':'#pricing-plan' , 'label':'PRICING PLAN' },
  {'href':'#testimonials' , 'label':'TESTIMONIALS' },
  {'href':'#footer' , 'label':'CONTACT US' },
];


{/* Hero Section */}
export const heroInfo= {
  imgUrl:heroImg,
  header:{
    title:'EVENT ORGANIZER',
    heading:'Get An Unforgettable Event Experience With us',
    subText:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia voluptatem numquam, provident nisi culpa accusantium delectus, dolores vitae quae, molestiae nihil quidem vero consectetur! Libero provident hic autem fugit?'
  },
  heroCardsInfo: [
      {
        'heading':'Friendly Team' ,
        'subText':'Aenean pharetra erat in nisl blandit hendrerit.',
        'icon': <IoPeopleOutline className= {heroCardIconStyle} />,
      },  
      {
        'heading':'The Best Venues' ,
        'subText':'Aenean pharetra erat in nisl blandit hendrerit.',
        'icon': <PiBuildingsThin className= {heroCardIconStyle}/>, 
    },
    {
      'heading':'Awesome Event' ,
      'subText':'Aenean pharetra erat in nisl blandit hendrerit.',
      'icon': <GiGlassCelebration className= {heroCardIconStyle}/>, 
    },
  ],
};


{/* About Section */}
export const aboutInfo= {
  imgUrl:aboutImg,
  header:{
    title:'ABOUT IDENTITY' ,
    heading:'Make Your Event Idea Come True' ,
    subText:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi aperiam beatae nostrum? Nulla tempora et minus nam quidem, nobis ea expedita recusandae eligendi, cupiditate quisquam ratione asperiores perspiciatis facilis.',
  },
  features: [
    'Provide Best Quality Events',
    'Satisfaction Guarantee',
    'Experienced Team',
    'Provide Best Quality Events',
  ],
};


{/* whyChooseUs Section */}
export const whyChooseUsInfo = {
  imgUrl:whyChooseUsImg,
  header:{
    title:'WHY CHOOSE US',
    heading:'Very Responsible With Your Event',
    subText:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi aperiam beatae nostrum? Nulla tempora et minus nam quidem, nobis ea expedita recusandae eligendi, cupiditate quisquam ratione asperiores perspiciatis facilis.',
  },
  features:[
    {'label':'Friendly Team', 'icon': <AiOutlineTeam className= {whyChooseUsIconStyle} /> } ,
    {'label':'The Best Venues', 'icon': <HiMiniBuildingStorefront className= {whyChooseUsIconStyle} /> } ,
    {'label':'Unique Scenario', 'icon': <GiThink className= {whyChooseUsIconStyle} /> } ,
    {'label':'Awesome Event', 'icon': <FaPeopleRobbery className= {whyChooseUsIconStyle}/> } ,
  ],
}

{/* Services Section */}
export const servicesInfo= {
  header:{
    title:'SERVICES' ,
    heading:'Event Service We Profide',
    subText: 'Excepteur siCras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet.', 
  },
  features:[
    {
      'heading':'Wedding' ,
      'subText':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      'icon': servicesSvg.svg1, 
    },
    {
      'heading':'Corporate Event' ,
      'subText':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      'icon': servicesSvg.svg2, 
    },
    {
      'heading':'Birthday Party' ,
      'subText':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      'icon': servicesSvg.svg3, 
    },
    {
      'heading':'Anniversaries' ,
      'subText':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      'icon': servicesSvg.svg4, 
    },
    {
      'heading':'Private Party' ,
      'subText':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      'icon': servicesSvg.svg5, 
    },
    {
      'heading':'Masquerade Party' ,
      'subText':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      'icon': servicesSvg.svg6, 
    },
  ],
};

{/* PricingPlan Section */}
export const pricingPlanInfo={
  header:{
      title:'PRICING PLAN' ,
      heading:'Choose Your Event Package',
      subText: 'Excepteur siCras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet.', 
    },
  pricingPlanCardsInfo:[
      {'label':'Birthday Party', 'subText':'Start From', 'price': '$139', 'details':['5 Hours', 'Decoration', 'Entertainment', 'Catering', 'Documentation', 'Up to 20 Persons'], 'button':'GET STARTED'} ,
      {'label':'Wedding', 'subText':'Start From', 'price': '$139', 'price': '$799', 'details':['5 Hours', 'Decoration', 'Entertainment', 'Catering', 'Documentation', 'Up to 20 Persons'], 'button':'GET STARTED'} ,
      {'label':'Corporate Events', 'subText':'Start From', 'price': '$739', 'price': '$699', 'details':['5 Hours', 'Decoration', 'Entertainment', 'Catering', 'Documentation', 'Up to 20 Persons'], 'button':'GET STARTED'} ,
      {'label':'Festival', 'subText':'Start From', 'price': '$1399', 'price': '$1139', 'details':['5 Hours', 'Decoration', 'Entertainment', 'Catering', 'Documentation', 'Up to 20 Persons'], 'button':'GET STARTED'} ,
    ]
};


{/* Portfolio Section */}
export const portfolioInfo= {
  header:{
      title:'PORTFOLIO' ,
      heading:'Some of Our Event',
      subText: 'Excepteur siCras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet.', 
    },
  portfolioCardsInfo:[
    {
      id: 'portfolio-1',
      imgUrl: PortfolioImage01,
      title: 'The Hogwarts',
    },
    {
      id: 'portfolio-2',
      imgUrl: PortfolioImage02,
      title: 'The Hogwarts',
    },
    {
      id: 'portfolio-3',
      imgUrl: PortfolioImage03,
      title: 'The Hogwarts',
    },
    {
      id: 'portfolio-4',
      imgUrl: PortfolioImage04,
      title: 'The Hogwarts',
    },
    {
      id: 'portfolio-5',
      imgUrl: PortfolioImage05,
      title: 'The Hogwarts',
    },
  ]
};


{/* UpcomingEvents Section */}
export const upcomingInfo= {
  header:{
      title:'UPCOMING' ,
      heading:'Upcoming Events',
      subText: 'Excepteur siCras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet.', 
    },
  upcomingCardsInfo: [
    {
      id: 'upcoming-1',
      imgUrl: UpcomingImage01,
      title: 'The Hogwarts',
    },
    {
      id: 'upcoming-2',
      imgUrl: UpcomingImage02,
      title: 'The Hogwarts',
    },
    {
      id: 'upcoming-3',
      imgUrl: UpcomingImage03,
      title: 'The Hogwarts',
    },
    {
      id: 'upcoming-4',
      imgUrl: UpcomingImage04,
      title: 'The Hogwarts',
    },
    {
      id: 'upcoming-5',
      imgUrl: UpcomingImage05,
      title: 'The Hogwarts',
    },
  ]
};


{/* Feedback */}
export const testimonialsInfo= {
  header:{
    title:'testimonials',
    heading:'Experience They Have',
    subText:'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.',
  },
  content:[
    {
      id: 'testimonial-1',
      imgUrl: TestimonialImage01 ,
      review: '— Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea, ex nemo, a fuga adipisci eligendi dolores optio necessitatibus similique quia, at accusantium numquam aut fugiat voluptatum maxime suscipit consectetur.',
      clientName:'Baron Fox',
      aboutClient:'CEO Agency',
    },  
    {
      id: 'testimonial-2',
      imgUrl: TestimonialImage02 ,
      review: '— Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea, ex nemo, a fuga adipisci eligendi dolores optio necessitatibus similique quia, at accusantium numquam aut fugiat voluptatum maxime suscipit consectetur.',
      clientName:'Jammie Mordo',
      aboutClient:'Actor',
    },  
    {
      id: 'testimonial-3',
      imgUrl: TestimonialImage03 ,
      review: '— Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea, ex nemo, a fuga adipisci eligendi dolores optio necessitatibus similique quia, at accusantium numquam aut fugiat voluptatum maxime suscipit consectetur.',
      clientName:'Saravaita',
      aboutClient:'Singer',
    },
  ]
};

{/* Footer */}
export const footerSubText= 'Aenean pharetra erat in nisl blandit. Nullam gravida enim curae elementum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente non animi. ';

export const footerLinks = [
  {
      title: "Services",
      links: [
          { name: "Wedding", link: "#services" },
          { name: "Birthday Party", link: "#services" },
          { name: "Corporate Event", link: "#services" },
          { name: "Anniversaries", link: "#services" },
          { name: "Private Party", link: "#services" },
          { name: "Masquerade Party", link: "#services" },
      ],
  },
  {
      title: "Help",
      links: [
          { name: "About us", link: "#about" },
          { name: "FAQs", link: "/" },
          { name: "How it works", link: "/" },
          { name: "Privacy policy", link: "/" },
          { name: "Payment policy", link: "/" },
      ],
  },
  {
      title: "Get in touch",
      links: [
          { name: "customer@identity.com", link: "mailto:customer@identity.com" },
          { name: "+92554862354", link: "tel:+92554862354" },
      ],
  },
];

export const socialMedia = [
  { src: '/icons/facebook.svg', alt: "facebook logo" },
  { src: '/icons/twitter.svg', alt: "twitter logo" },
  { src: '/icons/instagram.svg', alt: "instagram logo" },
];
