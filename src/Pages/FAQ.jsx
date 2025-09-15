import React from 'react'
import '../faq/Faq.css'
import FaQImg from '../faq/FaQImg';
import FaqPage from '../faq/FaqPage';
import Pricing from '../Home/Pricing';
import FaQForm from '../faq/FaQForm';
import PartnerSlider from '../Home/PartnerSlider';
import AboutTechSection from '../faq/AboutTechSection';
const FAQ = () => {
  return (
    <>
      <FaQImg/>
      <FaqPage/>
      <FaQForm/>
      <Pricing/>
      <PartnerSlider/>
      <AboutTechSection/>
    </>
  )
}

export default FAQ
