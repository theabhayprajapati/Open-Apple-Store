import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
    const router = useRouter()
    return (
        <div className="flex justify-between text-gray-200 font-medium m-3 text-xl ">
            <div>
                <button
                
                    onClick={() => router.push('/')}
                >
                    <img src="/favicon.ico" className='h-[30px]' alt="" />
                </button>
            </div>
            <div className="flex gap-3 text-gray-400 ">
                <button
                    onClick={() => router.push('https://github.com/theabhayprajapati/Open-Apple-Store#readme')}
                >
                    Manual
                </button>
                <button
                    onClick={() => router.push('https://github.com/theabhayprajapati/Open-Apple-Store')}
                >
                    Github
                </button>
                <button
                    onClick={() => router.push('/api/all')}

                >
                    API
                </button>
            </div>
        </div>
    )
}

export default Header
