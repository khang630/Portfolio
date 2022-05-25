import React from 'react'
import { GiGrandPiano } from 'react-icons/gi'
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactAudioPlayer from 'react-audio-player';
import Chopin from '../Downloads/Chopin.mp3'

const Interests = () => {
    AOS.init();
    return (
        <div name='Interests' className='w-full h-screen bg-gray-0 min-h-[800px]'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-1'>
                    <div className='sm:text-right pb-8 px-4 sm:px-0'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#C65D7B]' data-aos="fade-right" data-aos-duration="3000" data-aos-delay="300">Interests</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-5 hover:scale-105 duration-300'>
                    <div className='sm:text-right'>
                        <p className='text-3xl font-bold text-right text-[#874356] flex sm:justify-end ' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1100">Piano <GiGrandPiano className='ml-2' /></p>
                        <a href='https://www.youtube.com/channel/UC8KwbjmSoB2M9KE0ZhD5XiQ' target="_blank" className='text-black flex sm:justify-end mt-2' data-aos="fade-right" data-aos-duration="2500" data-aos-delay="1300"><span className='border-b-2 inline border-black'>Youtube Channel</span> <BsFillArrowUpRightSquareFill className='ml-2 mt-1' /></a>
                    </div>
                    <div>
                        <p data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1100">I like to play the piano. My favorite classical piano piece would be Chopin's Nocturne in E-flat Major, Op. 9 No. 2.</p>
                        <p data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1300" className='mt-2'>I also like to compose songs on the piano. I have a Youtube channel where I compose piano covers of k-pop songs.</p>
                    </div>

                </div>
               
                <audio id="audioplayer" controls className=''>
                    <source src={Chopin} type='audio/mp3' />    
                </audio>

              
            </div>



        </div>
    )
}

export default Interests

/*
  <ReactAudioPlayer src='../Downloads/Chopin.mp3' controls />
*/