import React from 'react'
import { VscFoldDown } from "react-icons/vsc";
import {FaMapMarkerAlt} from 'react-icons/fa'
import {IoIosSchool} from 'react-icons/io'

const About = () => {
    return (
        <div name='About' className='w-full h-screen bg-gray-0 text-black '>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <div className='shadow:lg w-full h-screen max-w-[1500px] max-h-[500px] flex flex-col justify-center items-center bg-[#1c1b20]'>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-1 '>
                        <div className='sm:text-right pb-8 pl-4'>
                            <p className='text-4xl font-bold inline border-b-4 border-[#C65D7B] text-white' >About</p>
                        </div>
                    </div>
                    <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-5 hover:scale-105 duration-300'>
                        <div className='sm:text-right'>
                            <p className='text-3xl font-bold  text-[#F68989] flex justify-end'>Education <IoIosSchool className='ml-2 mt-1'/> </p>
                        </div>
                        <div>
                            <p className='text-white'>I have a BS in Computer Science at the University of North Texas. I also graduated Summa Cum Laude with a 3.9 GPA. </p>
                        </div>
                    </div>
                    <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-5 hover:scale-105 duration-300 mt-4'>
                        <div className='sm:text-right'>
                            <p className='text-3xl font-bold  text-[#F68989] flex justify-end'>Location <FaMapMarkerAlt className='ml-2 mt-1'/></p>
                        </div>
                        <div>
                            <p className='text-white'>I am looking for work in the Dallas-Fort Worth Metroplex but I am also willing to relocate.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default About

/*
bg-[#F6E7D8]

Maybe a scroll at the bottom
<p className='border-4 border-red-500 flex'>Scroll <VscFoldDown className='ml-2 mt-1'/></p>
*/