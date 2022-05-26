import React from 'react'
import { GiGrandPiano } from 'react-icons/gi'
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactHowler from 'react-howler'
import Chopin from '../Downloads/Chopin.mp3'
import { Howl, Howler } from 'howler';
import { useState } from 'react';
import { HiCursorClick } from 'react-icons/hi'
import { BsArrowLeftShort } from 'react-icons/bs'


const Interests = (props) => {




    const clickPlay = () => {
        props.setPlaying(true);
    }

    const clickPause = () => {
        props.setPlaying(false)
    }

    AOS.init();
    return (
        <div name='Interests' className='w-full h-screen bg-gray-0 min-h-[800px]'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-1'>
                    <div className='sm:text-right pb-8 px-4 sm:px-0'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#C65D7B]' data-aos="fade-right" data-aos-duration="3000" data-aos-delay="300">Interests</p>
                    </div>
                </div>
                <div className='max-w-[1200px] w-full  grid sm:grid-cols-2 gap-8 px-5 hover:scale-105 duration-300'>
                    <div className='sm:text-right'>
                        <p className='text-3xl font-bold text-right text-[#874356] flex sm:justify-end ' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1100">Piano <GiGrandPiano className='ml-2' /></p>
                        <a href='https://www.youtube.com/channel/UC8KwbjmSoB2M9KE0ZhD5XiQ' target="_blank" className='text-black flex sm:justify-end mt-2' data-aos="fade-right" data-aos-duration="2500" data-aos-delay="1300"><span className='border-b-2 inline border-black'>Youtube Channel</span> <BsFillArrowUpRightSquareFill className='ml-2 mt-1' /></a>
                    </div>
                    <div>
                        <p data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1100">I like to play the piano. My favorite classical piano piece would be <span className='flex'><span className={props.playing ? 'font-bold animate-pulse border-2 rounded-md border-black bg-[#F68989] px-2' : 'font-bold cursor-pointer border-2 rounded-md border-black hover:bg-[#F68989] px-2'} onClick={clickPlay}>Chopin Nocturne in E-flat Major, Op. 9 No. 2. </span>
                            <HiCursorClick size={24} className={props.playing ? 'hidden' : "ml-2 animate-bounce-left rotate-45 mt-1"} /> <span className={props.playing ? 'hidden' : 'ml-2 mt-1 animate-bounce-left text-[#C65D7B] font-bold'}>click me!</span></span>
                        </p>
                        <p data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1300" className='mt-2'>I also like to compose songs on the piano. I have a Youtube channel where I compose piano covers of k-pop songs.</p>
                    </div>
                </div>
                <ReactHowler id='chopin-audio' src={Chopin} playing={props.playing} loop={true} />



            </div>
        </div>
    )
}

export default Interests

/*
  <ReactAudioPlayer src='../Downloads/Chopin.mp3' controls />
*/