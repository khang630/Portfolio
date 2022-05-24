import React from 'react'

const Contact = () => {
    return (
        <div name='Contact' className='w-full h-screen flex justify-center items-center bg-[#1c1b20]'>

            <form method='POST' action="https://getform.io/f/5b4cda74-8afd-4979-866d-1941b0fa3eff" className='flex flex-col max-w-[1000px] w-full'>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#C65D7B] text-white'>Contact</p>
                    <p className='text-white py-4'>Feel free to send me a message using the form below or send me an email - khangnguyen520@yahoo.com</p>
                </div>
                <input className='p-1 rounded-sm' type='text' placeholder='Name' name='FormName' />
                <input className='my-4 p-1 rounded-sm' type='text' placeholder='Your Email' name='FormEmail' />
                <textarea className='p-1 resize-none rounded-sm' placeholder='Message' name='FormMessage' rows='10'></textarea>
                <button className="text-white flex justify-center max-w-[150px]  py-6 px-4 my-4 border-2 rounded bg-[#3A3845] hover:scale-105 duration-300 hover:bg-[#F68989] hover:text-[#3A3845] ">Send
                
                </button>
            </form>


        </div>
    )
}

export default Contact