import React from 'react'

const About = () => {
    return (
        <div name='Education' className='w-full h-screen bg-gray-0 text-black'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-1'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#C65D7B]' >About</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-5'>
                    <div className='sm:text-right'>
                        <p className='text-3xl font-bold  text-[#874356] '>Education</p>
                    </div>
                    <div>
                        <p>I have a BS in Computer Science at the University of North Texas. </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About

/*
bg-[#F6E7D8]
*/