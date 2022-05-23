import React from 'react'

const About = () => {
    return (
        <div name='Education' className='w-full h-screen bg-gray-0 text-black border-4 border-red-500'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <div className='shadow:lg w-full h-screen max-w-[1500px] max-h-[500px] flex flex-col justify-center items-center bg-[#1c1b20]'>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-1'>
                        <div className='sm:text-right pb-8 pl-4'>
                            <p className='text-4xl font-bold inline border-b-4 border-[#C65D7B] text-white' >About</p>
                        </div>
                    </div>
                    <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-5'>
                        <div className='sm:text-right'>
                            <p className='text-3xl font-bold  text-[#F68989] '>Education</p>
                        </div>
                        <div>
                            <p className='text-white'>I have a BS in Computer Science at the University of North Texas. I also graduated Summa Cum Laude with a 3.9 GPA. </p>
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
*/