import { useRouter } from 'next/router'
import React from 'react'

const Landing = () => {
    const router = useRouter()
    return (
        <div className='md:text-6xl  text-4xl font-extrabold '>

            <h1>
                <span className='text-[#A2AAAD]'>
                    Apple Store's</span> <span className='text-orange-500'>
                    data
                </span>  for your next <span className="text-green-500">
                    project</span>, simply gonna to be <span className="text-blue-300">
                    better
                </span>
            </h1>
            <div className='md:w-[70%] mt-10 md:mt-10 '>
                <p className='text-xl text-gray-400 font-medium'>
                    Open Apple Store has data of almost all Apple Store's Products.
                </p>
                <div className="text-xl flex gap-2 mt-5 justify-between font-bold focus:ring-blue-200">
                    <button className="border-2 w-full hover:scale-95 hover:bg-white hover:text-black hover:border-black focus:scale-95 transition duration-200 rounded-sm py-2 font-semibold"
                        onClick={() => router.push('https://github.com/theabhayprajapati/Open-Apple-Store#readme')}
                    >
                        Manual
                    </button>
                    <button className="w-full bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:scale-95 focus:scale-95 transition duration-200 transform rounded-sm  py-2 font-semibold"
                        onClick={() => router.push('https://github.com/theabhayprajapati/Open-Apple-Store')}

                    >
                        Github
                    </button>
                </div>
            </div>
        </div>)
}

export default Landing