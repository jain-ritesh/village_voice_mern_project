import React from 'react'
import Navbar from './ui/Navbar'
import Section from './ui/Section'
import AllSuggestions from './ui/AllSuggestions'
import AboutUs from './ui/AboutUs'
import ContactUs from './ui/ContactUs'
import Footer from './ui/Footer'
// import SuggetionForm from './ui/SuggetionForm'

const Home = () => {
  
  return (<>
  {/* <Navbar/> */}
  <Section/>
  <AllSuggestions/>
  <AboutUs/>
  <ContactUs/>
  {/* <Footer/> */}
  
  </>
  )
}

export default Home