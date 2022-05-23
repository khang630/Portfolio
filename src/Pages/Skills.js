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
        <div className='w-full h-screen bg-gray-0'>
            <div className='border-4 border-purple-500 flex flex-col justify-center items-center w-full h-screen'>

                <div className='max-w-[1900px] max-h-[800px] w-full h-full border-4 border-gray-700 flex flex-col justify-center items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#C65D7B] mb-5' >Skills</p>
                    <div className='border-4 border-green-400 w-full max-w-[1800px] max-h-[700px] grid grid-cols-2 sm:grid-cols-4 gap-8'>
                        <div className='border-2 border-red-400 text-center'>
                            <p className='text-2xl font-bold'>Programming Languages &amp; OS</p>
                            <p className='border-2 border-blue-600 mt-3 text-center my-auto'>C/C++, Java, Python, Linux</p>
                            <div className='grid grid-cols-2 gap-6 mt-5 px-3' >
                                <img className='w-14 mx-auto my-auto' src={C} alt='C icon' />
                                <img className='w-14 mx-auto my-auto' src={Cplus} alt='C++ icon' />
                                <img className='w-28 mx-auto my-auto' src={Java} alt='Java icon' />
                                <img className='w-32 mx-auto my-auto' src={Python} alt='Python icon' />
                            </div>
                            <img className='w-24 mx-auto my-auto mt-3' src={Linux} alt='Linux icon' />
                        </div>
                        <div className='border-2 border-red-400 text-center'>
                            Front-end
                            <p className='border-2 border-blue-600 mt-3 text-center my-auto'>ReactJS, HTML, CSS, Javascript, Tailwind CSS </p>
                            <div className='grid grid-cols-2 gap-6 mt-5 px-3'>
                                <img className='w-32 mx-auto my-auto border-2 border-red-500' src={Reactpic} alt='React icon' />
                                <img className='w-32 mx-auto my-auto border-2 border-red-500' src={Tailwind} alt='Tailwind icon' />
                            </div>
                            <img className='w-32 mx-auto my-auto mt-12 border-2 border-red-500' src={HTML} alt='HTML, CSS, Javascript icon' />

                        </div>
                        <div className='text-center border-2 border-red-400'>
                            Database
                            <p className='text-center border-2 border-blue-600 mt-3 my-auto'>PostgreSQL, MySQL, SQL</p>
                            <div className='grid grid-cols-2 gap-6 mt-5 px-3'>
                                <img className='w-32 mx-auto my-auto border-2 border-red-500' src={PostgreSQL} alt='React icon' />
                                <img className='w-32 mx-auto my-auto border-2 border-red-500' src={MySQL} alt='MySQL icon' />
                            </div>
                        </div>
                        <div className='text-center border-2 border-red-400'>
                            Project Management
                            <p className='text-center border-2 border-blue-600 mt-3'>Github, Trello, Slack</p>
                            <div className='grid grid-cols-2 gap-6 mt-5 px-3'>
                                <img className='w-32 mx-auto my-auto border-2 border-red-500' src={Github} alt='Github icon' />
                                <img className='w-32 mx-auto my-auto border-2 border-red-500' src={Trello} alt='Trello icon' />
                            </div>
                            <img className='w-32 mx-auto my-auto mt-12 border-2 border-red-500' src={Slack} alt='Slack icon' />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skills