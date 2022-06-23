import React from 'react'
import {FaDatabase} from 'react-icons/fa'
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
import Carousel from 'react-elastic-carousel'


const Projects = () => {
  return (
    <div name='Projects' className='w-full h-screen bg-gray-0 text-black min-h-[800px]'>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='shadow:lg w-full h-screen sm:max-w-[1500px] sm:max-h-[500px] flex flex-col justify-center items-center bg-[#1c1b20]' data-aos="slide-left" data-aos-duration="2500" data-aos-delay="10">
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-1'>
            <div>

            </div>
            <div className='sm:text-left pb-8 px-4 sm:px-0'>
              <p className='text-4xl font-bold inline border-b-4 border-[#C65D7B] text-white' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1200" >Projects</p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-5 hover:scale-105 duration-300  '>
            <div className='sm:text-right'>
              <p className='text-3xl font-bold  text-[#F68989] flex sm:justify-end '  data-aos="fade-left" data-aos-duration="2500" data-aos-delay="1000">Syllabus Database <FaDatabase className='ml-4'/></p>
              <a href='https://github.com/Karishad/2021-2022-Capstone-DB' target="blank" className='text-white flex sm:justify-end mt-2 ' data-aos="fade-right" data-aos-duration="2500" data-aos-delay="1400"><span className='border-b-2 inline' >Github</span> <BsFillArrowUpRightSquareFill className='ml-2 mt-1 '/></a>
            </div>
            <div>
              <p data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1600" className='text-white'>React application <span className='text-[#C65D7B] font-bold'>(</span><span className='font-bold text-[#fffffff]'>MERN</span> stack with SQLite instead of MongoDB<span className='text-[#C65D7B] font-bold'>)</span> that provides the same functionality as the Microsoft Access
                Database with a focus on a better UI/UX for making queries, updating the database, and generating syllabus
                pdfs. </p>
                <p data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1600" className='text-white mt-2'>This was a group project and I worked on the Front-end using ReactJS, HTML, CSS, and Javascript. </p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-5 mt-4 hover:scale-105 duration-300 '>
            <div className='sm:text-right'>
              <p className='text-3xl font-bold  text-[#F68989] flex sm:justify-end '  data-aos="fade-left" data-aos-duration="2500" data-aos-delay="1000">Portfolio Website <CgWebsite className='ml-4 mt-1'/></p>
              <a href='https://github.com/khang630/Portfolio' target="_blank" className='text-white flex sm:justify-end mt-2' data-aos="fade-right" data-aos-duration="2500" data-aos-delay="1400"><span className='border-b-2 inline'>Github</span> <BsFillArrowUpRightSquareFill className='ml-2 mt-1'/></a>
            </div>
            <div>
              <p data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1600" className='text-white'>I created this personal portfolio website myself. I used ReactJS, HTML, Javascript, CSS, and Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects