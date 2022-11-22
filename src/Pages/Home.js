import { VscFoldDown } from "react-icons/vsc";
import { BsArrowDownShort } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Typed from 'react-typed'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {
    

    AOS.init();
    return (
        <div name='Home' className="bg-white w-full h-screen min-h-[800px]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <div>
                    <p className="text-[#F68989] font-bold" data-aos="fade-right" data-aos-duration="2500">Hi, I'm</p>
                    <h1 className="text-[#C65D7B] text-7xl font-bold"  data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1000" >Khang Nguyen</h1>
                    <h2 className="text-[#874356] font-bold text-3xl pt-1" data-aos="fade-left" data-aos-duration="2500" data-aos-delay="2000">I am an entry level software engineer and recent graduate.</h2>
                    <div >
                        <p data-aos="fade-up" data-aos-duration="2500" data-aos-delay="2200" className="mt-2 max-w-[800px]">I am currently looking for work and am open to any opportunities to develop and advance my career! </p>
                        <p data-aos="fade-up" data-aos-duration="2500" data-aos-delay="2300">I am looking for opportunities as a <Typed className='font-bold' strings={['Software Engineer.', 'Data Engineer.', 'Full-Stack Developer.']} typeSpeed={80} backSpeed={70} loop /></p>
                        <p data-aos="fade-up" data-aos-duration="2500" data-aos-delay="2400">Aside from what I listed above, I am also open to consider other positions. Otherwise, Thank You for visiting my portfolio and feel free to look around!</p>
                    </div>
                    <div>
                        <div>
                            <Link to="About" smooth={true} duration={2200}>
                                <button data-aos="fade-up" data-aos-duration="2500" data-aos-delay="3000" className="text-[#F68989] group flex items-center py-6 px-4 my-2 border-2 rounded bg-[#1c1b20] hover:scale-105 duration-300 hover:bg-[#F68989] hover:text-[#3A3845]">View About
                                    <span className="duration-300">
                                        <BsArrowDownShort className="ml-2 scale-125" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Home

/*<img className="PortfolioImage" src={PortfolioImage}/>*/

/*
<p>Hi, I'm Khang Nguyen and I am a recent University Graduate.</p>
                <p>I am currently looking for work and am open to any opportunities to develop and start my career!</p>
                <p>I aspire to become either a Software Engineer, Data Engineer, UI/UX Designer, or Full-Stack Developer.</p>
                <p>Aside from what I listed above, I am also open to consider other positions.</p>
                <p>Otherwise, Thank You for visiting my portfolio and feel free to look around!</p>s

*/

/* TAILWIND about paragraphs
max-w-[1000px]: element has a max width of 1000 pixels
mx-auto: margin left and right auto for that element


#f8f8f8 - Super light gray color
*/