import React from 'react'
import { GiGrandPiano } from 'react-icons/gi'

const Interests = () => {
    return (
        <div className='w-full h-screen bg-gray-0'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-1'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#C65D7B]' >Interests</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-5'>
                    <div className='sm:text-right'>
                        <p className='text-3xl font-bold  text-[#874356] '>Piano <GiGrandPiano/></p>
                    </div>
                    <div>
                        <p>I have a BS in Computer Science at the University of North Texas. </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Interests