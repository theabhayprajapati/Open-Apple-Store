import React from 'react'

const Code = () => {    
    return (
        <code className='flex flex-col select-none'>
            <div>
                <span className="text-pink-500">
                    const {''}
                </span>
                <span className="text-purple-500">
                    jsondata {' '}
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
                <span className="text-purple-500 break-words">
                    'https://oas.vercel.app/api/all'
                </span>
                <span className="text-pink-500">
                    )
                </span>
            </div>
            <div>
                <span className="text-pink-500">
                    const {''}
                </span>
                <span className="text-purple-500">
                    response {' '}
                </span>
                = {' '}
                <span className="text-pink-500">
                    await {''}
                </span>
                <span className="text-blue-300">
                    jsondata
                </span>

                <span className="text-purple-500 break-words">
                    .json()
                </span>
            </div>
            <div>
                <span className="text-pink-500">
                    console
                </span>
                <span className="text-purple-500">

                    <span className="white">.</span>log
                </span>
                <span className="text-pink-500">
                    (
                </span>
                <span className="text-purple-500 break-words">
                    response<span className="white">.</span>
                    <span className="green">data
                        <span>
                            {'[2]'}
                        </span>
                    </span>
                </span>
                <span className="text-pink-500">
                    )
                </span>
            </div>
            <code className='blue'>
                    //? Response
            </code>
            <div className='white flex flex-col'>
                <span>
                    {'{'}
                </span>
                <span className="text-transparent">
                    {'____'}<span className='white'>
                        _id:
                    </span>
                    <span className="green">
                        622b8c959c61aebf05257789<span className="white">
                            ,
                        </span>
                    </span>
                </span>
                <span className="text-transparent">
                    {'____'}<span className='white'>
                        modelname:
                    </span>
                    <span className="green">
                        'iPhone 13 mini'<span className="white">
                            ,
                        </span>
                    </span>
                </span>
                <span className="text-transparent">
                    {'____'}<span className='white'>
                        price:
                    </span>
                    <span className="white">
                        {' { '}
                    </span>
                    <span className="white">
                        IN:
                    </span>
                    <span className="green">
                        '69900' <span className="white">
                            ,
                        </span>
                    </span>
                    <span className="white">
                        US:
                    </span>
                    <span className="green">
                        '699'
                    </span>
                    <span className='white'>
                        {' } '}
                    </span>
                </span>
                <span className='text-transparent'>
                    {'____'}
                    <span className="white">
                        category:{' '}
                    </span>
                    <span className="green">
                        'iPhone'<span className="white">
                            ,
                        </span>
                    </span>

                </span>
                <span className='text-transparent'>
                    {'____'}
                    <span className="white">
                        series:{' '}
                    </span>
                    <span className="green">
                        'iPhone  13'<span className="white">
                            ,
                        </span>
                    </span>

                </span>
                ...
                <div>
                </div>

            </div>



        </code>
    )
}

export default Code