import React from 'react'
import '../faq/Faq.css'
import FaQImg from '../faq/FaQImg';
import FaqPage from '../faq/FaqPage';
import PricingSection from '../Home/pricing';
import FaQForm from '../faq/FaQForm';
import PartnerSlider from '../Home/PartnerSlider';
import AboutTechSection from '../faq/AboutTechSection';
const FAQ = () => {
  return (
    <>
      <FaQImg/>
      <FaqPage/>
      <FaQForm/>
      <PricingSection/>
      <PartnerSlider/>
      <AboutTechSection/>
    </>
  )
}

export default FAQ
