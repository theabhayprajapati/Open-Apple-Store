import React from 'react'

const Code = () => {
    return (
        <code className=''>
            <span className="text-pink-500">
                const {''}
            </span>
            <span className="text-purple-500">
                data {' '}
            </span>
            = {' '}
            <span className="text-pink-500">
                await {''}
            </span>
            <span className="text-blue-300">
                fetch
            </span>
            <span className="text-pink-500">
                (
            </span>
            <span className="text-purple-500">
                'https://oas.vercel.app/api/all'
            </span>
            <span className="text-pink-500">
                )
            </span>


        </code>
    )
}

export default Code