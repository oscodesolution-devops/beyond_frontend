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
    <Navbar/>
    <div className='w-screen h-[35vh] py-12 px-16 flex flex-row'>
      <div className="w-[100%]  text-[80px] leading-[80px] font-sans text-center text-black font-extrabold"> Who we are and<br/> what we do</div>
      <div className="w-[100%] ">
        <p className='text-[18px] text-start text-[#797878]'>Welcome to Beyond Excellence, your gateway to mastering the French language in the heart of Delhi. Embark on a linguistic journey with our comprehensive French language course, meticulously designed to cater to both beginners and advanced learners. Discover the allure of this romantic language and the myriad benefits it offers. </p>
        <button className=" text-white  rounded py-2 px-6 md:px-12 transition-colors mt-6 duration-300">Search Course</button>

      </div>

    </div>

    <div className="w-screen px-[180px] mb-10 gap-10 h-auto  ">
      <div className='w-[100%] flex flex-row gap-2 mb-2'>
        <div className='h-[400px]  w-[65%] overflow-hidden'><img src={img1}/></div>
        <div className='h-[400px]  w-[35%] overflow-hidden'><img src={img2}/></div>
      </div>
      <div className='w-[100%] flex flex-row gap-2'>
        <div className='h-[350px]  w-[35%] overflow-hidden'><img src={img3}/></div>
        <div className='h-[350px]  w-[65%] overflow-hidden'><img src={img4}/></div>
      </div>
      <div></div>

    </div>

    <div className='w-screen h-[40vh] py-12 px-32 flex flex-row'>
      <div className="w-[100%]  text-theme-200  text-[50px] leading-[80px] font-sans text-center font-extrabold">Why The French Language <br/> Course in Delhi?</div>
      <div className="w-[100%] ">
        <p className='text-[18px] w-[90%] text-start text-[#797878]'>
          Choosing to learn the French language in Delhi opens doors to a world of opportunities. Our courses blend cultural immersion with linguistic proficiency, providing an unparalleled learning experience. Beyond Excellence stands out for its dynamic teaching methods, fostering a supportive environment that ensures your success in mastering French.           </p>
      </div>

    </div>
    <AboutSection/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default AboutUs