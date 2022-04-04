import React, { useEffect, useState } from 'react'

const LowerLanding = () => {
    

    return (
        <div> <main className='max-w-5xl mx-auto '>
            <div>
                <h1 className='text-8xl font-extrabold text-black'>
                    No API keys Ever, JUST <span className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600`}>
                        FETCH.</span>
                </h1>
                <h1 className='text-white font-bold items-center w-full mx-auto grid place-items-center md:mt-5 '>
                    i can run everywhere
                </h1>
            </div>
        </main>
            <main>
                <div className="md:text-8xl text-5xl min-h-screen grid place-items-center font-extrabold text-white">
                    That's probably enough for now. We are waiting for your project ?👍
                </div>
            </main></div>
    )
}

export default LowerLanding