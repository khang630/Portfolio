import { VscFoldDown } from "react-icons/vsc";


function Home() {
    return (
        <div name='home' className="bg-[#F6E7D8] w-full h-screen">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#F68989] font-bold">Hi, I'm</p>
                <h1 className="text-[#C65D7B] text-7xl font-bold  ">Khang Nguyen</h1>
                <h2 className="text-[#874356] font-bold text-3xl pt-1">I am a recent graduate.</h2>
                <p className="py-4 max-w-[800px]">I am currently looking for work and am open to any opportunities to develop and start my career!
                    I aspire to become either a Software Engineer, Data Engineer, UI/UX Designer, or Full-Stack Developer.
                    Aside from what I listed before, I am also open to consider other positions.
                    Otherwise, Thank You for visiting my portfolio and feel free to look around!</p>
                <div>
                    <div>
                        <button className="text-[#F68989] group flex items-center py-6 px-4 my-2 border-2 rounded bg-[#3A3845] hover:scale-105 duration-300 hover:bg-[#F68989] hover:text-[#3A3845]">View About
                            <span className="duration-300">
                                <VscFoldDown className="ml-2" />
                            </span>
                        </button>
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

*/