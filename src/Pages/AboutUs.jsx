import React from 'react'
import Navbar from '../Components/Navbar'
import img1 from "../Images/german.png"
import img2 from "../Images/books.png"
import img3 from "../Images/english.png"
import img4 from "../Images/icon.png"
import FAQ from '../Routes/Faq'
import Footer from '../Sections/Footer'
import AboutSection from '../Components/AboutSection'
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-auto md:h-[35vh] py-6 px-4 md:py-12 md:px-16 flex flex-col md:flex-row">
        <div className="w-full text-[32px] leading-[40px] md:text-[80px] md:leading-[80px] font-sans text-center md:text-start text-black font-extrabold">
          Who we are and<br /> what we do
        </div>
        <div className="w-full mt-4 md:mt-0">
          <p className="text-[16px] md:text-[18px] text-start text-[#797878]">
            Welcome to Beyond Excellence, your gateway to mastering the French language in the heart of Delhi. Embark on a linguistic journey with our comprehensive French language course, meticulously designed to cater to both beginners and advanced learners. Discover the allure of this romantic language and the myriad benefits it offers.
          </p>
          <button className="text-white rounded py-2 px-6 md:px-12 transition-colors mt-6 duration-300 bg-black hover:bg-gray-800">
            Search Course
          </button>
        </div>
      </div>

      <div className="w-screen px-4 md:px-[180px] mb-10 gap-4 md:gap-10 h-auto">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2 mb-4">
          <div className="h-[200px] md:h-[400px] w-full md:w-[65%] overflow-hidden">
            <img src={img1} alt="Image 1" className="w-full h-full object-cover" />
          </div>
          <div className="h-[200px] md:h-[400px] w-full md:w-[35%] overflow-hidden">
            <img src={img2} alt="Image 2" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2">
          <div className="h-[200px] md:h-[350px] w-full md:w-[35%] overflow-hidden">
            <img src={img3} alt="Image 3" className="w-full h-full object-cover" />
          </div>
          <div className="h-[200px] md:h-[350px] w-full md:w-[65%] overflow-hidden">
            <img src={img4} alt="Image 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>


      <div className="w-screen h-auto md:h-[40vh] py-6 px-4 md:py-12 md:px-32 flex flex-col md:flex-row">
        <div className="w-full text-[28px] leading-[40px] md:text-[50px] md:leading-[80px] font-sans text-center md:text-start text-theme-200 font-extrabold">
          Why The French Language <br /> Course in Delhi?
        </div>
        <div className="w-full mt-6 md:mt-0">
          <p className="text-[16px] md:text-[18px] w-full md:w-[90%] text-start text-[#797878]">
            Choosing to learn the French language in Delhi opens doors to a world of opportunities. Our courses blend cultural immersion with linguistic proficiency, providing an unparalleled learning experience. Beyond Excellence stands out for its dynamic teaching methods, fostering a supportive environment that ensures your success in mastering French.
          </p>
        </div>
      </div>

      <AboutSection />
      <FAQ />
      <Footer />
    </>
  )
}

export default AboutUs