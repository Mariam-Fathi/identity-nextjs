import { Hero, About,WhyChooseUs,Services, Portfolio, Upcoming, PricingPlan, Feedback, Subscribe, Footer } from "../sections";

const page = () => {
  return (
  <div>
    <Hero />
    <About />
    <WhyChooseUs />      
    <Services />
    <PricingPlan /> 
    <Portfolio />   
    <Upcoming />     
    <Feedback />   
    <Subscribe />   
    <Footer />   
  </div>
  )
}

export default page
