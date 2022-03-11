import React from 'react'

const Docs = () => {
    return (
        <div className=" text-gray-200">
            <main>
                <h1 className="text-4xl md:text-6xl font-bold">
                    QuickStart
                </h1>
                <div className="">
                    <h1 className=' bg-gray-600 mt-10 rounded-md p-2'>
                        Base Url:{' '} <code className="">
                            https://oas.vercel.app/api/
                        </code>
                    </h1>
                    <p className='mx-5'>
                        This is base url and will be required for every request you'll make.
                    </p>

                </div>
            </main>
        </div>
    )
}

export default Docs