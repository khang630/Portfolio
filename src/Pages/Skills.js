import React from 'react'

import C from '../Images/C.png'
import Cplus from '../Images/C++.png'
import Github from '../Images/Github.png'
import Java from '../Images/Java.png'
import Linux from '../Images/Linux.png'
import MySQL from '../Images/MySQL.png'
import PostgreSQL from '../Images/Postgresql.png'
import Python from '../Images/Python.png'
import Reactpic from '../Images/React.png'
import Slack from '../Images/Slack.png'
import Tailwind from '../Images/Tailwind.png'
import Trello from '../Images/Trello.png'
import VScode from '../Images/VScode.png'
import HTML from '../Images/HTML.png'


const Skills = () => {
    return (
        <div name='Skills' className='w-full h-screen bg-white min-h-[800px]'>
            <div className='flex flex-col justify-center items-center w-full h-screen'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#C65D7B] mb-5 ' >Skills</p>
                    <div className=' w-full sm:max-w-[1800px] sm:max-h-[800px] grid grid-cols-2 sm:grid-cols-4 sm:gap-8 gap-1'>
                        <div className=' text-center'>
                            <p className='text-2xl font-bold  '>Programming Languages &amp; OS</p>
                            <p className=' mt-3 text-center my-auto sm:mb-10'>C/C++, Java, Python, Linux</p>
                            <div className='grid grid-cols-2 gap-6 mt-5 px-3' >
                                <img className='w-14 mx-auto my-auto hover:scale-110 duration-300 ' src={C} alt='C icon' />
                                <img className='w-14 mx-auto my-auto hover:scale-110 duration-300 ' src={Cplus} alt='C++ icon' />
                                <img className='w-28 mx-auto my-auto hover:scale-110 duration-300 ' src={Java} alt='Java icon' />
                                <img className='w-32 mx-auto my-auto hover:scale-110 duration-300 ' src={Python} alt='Python icon' />
                            </div>
                            <img className='w-24 mx-auto my-auto mt-3  hover:scale-110 duration-300' src={Linux} alt='Linux icon' />
                        </div>
                        <div className=' text-center '>
                            <p className='text-2xl font-bold '>Front-end</p>
                            <p className=' mt-3 text-center my-auto  sm:mb-10'>ReactJS, HTML, CSS, Javascript, Tailwind CSS </p>
                            <div className='grid grid-cols-2 gap-6 mt-5 px-3'>
                                <img className='w-32 mx-auto my-auto   hover:scale-110 duration-300 ' src={Reactpic} alt='React icon' />
                                <img className='w-32 mx-auto my-auto   hover:scale-110 duration-300 ' src={Tailwind} alt='Tailwind icon' />
                            </div>
                            <img className='w-60 mx-auto my-auto mt-12   hover:scale-105 duration-300  ' src={HTML} alt='HTML, CSS, Javascript icon' />

                        </div>
                        <div className='text-center  '>
                        <p className='text-2xl font-bold '>Database</p>
                            <p className='text-center  mt-3 my-auto '>PostgreSQL, MySQL, SQL</p>
                            <div className='grid grid-cols-2 gap-6 mt-5 px-3'>
                                <img className='w-40 mx-auto my-auto   hover:scale-110 duration-300 ' src={PostgreSQL} alt='React icon' />
                                <img className='w-32 mx-auto my-auto  hover:scale-110 duration-300 ' src={MySQL} alt='MySQL icon' />
                            </div>
                        </div>
                        <div className='text-center '>
                        <p className='text-2xl font-bold '>Project Management</p>
                            <p className='text-center  mt-3  sm:mb-10'>Github, Trello, Slack</p>
                            <div className='grid grid-cols-2 gap-6 mt-5 px-3'>
                                <img className='w-20 mx-auto my-auto  hover:scale-110 duration-300' src={Github} alt='Github icon' />
                                <img className='w-32 mx-auto my-auto  hover:scale-110 duration-300  ' src={Trello} alt='Trello icon' />
                            </div>
                            <img className='w-32 mx-auto my-auto mt-2 sm:mt-12 hover:scale-110 duration-300 ' src={Slack} alt='Slack icon' />
                        </div>
                    </div>
                

            </div>

        </div>
    )
}

export default Skills