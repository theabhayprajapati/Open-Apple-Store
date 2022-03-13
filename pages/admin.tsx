import axios from 'axios';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { iPhoneState } from '../atoms/iphoneatoms';
import AddImages from '../components/addimages';
import Colors from '../components/colors';
import InputFeild from '../components/inputField';
import Specs from '../components/specs';
import Header from '../components/styles/Header';
const product = {

}
const AdminForOAS = () => {
    const router = useRouter()
    const { data: session } = useSession()
    // TODO: make a post request with fetch
    // button status 
    const [buttonstatus, setbuttonstatus] = useState(false)
    // make a product object
    const iPhoneOriginal = useRecoilValue(iPhoneState)

    const addTomongo = async (iPhoneOriginal: any, e: any) => {
        e.preventDefault()
        setbuttonstatus(true)
        const response = await fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(iPhoneOriginal)
        })
        const body = await response.json()
        console.log(body, 'we are in the addTomongo function')
        console.log(iPhoneOriginal, 'we are in the addTomongo function');
        alert('we have this check console.')
        setbuttonstatus(false)
    }

    return (
        <div className="p-3 md:p-10">
            <Head>
                <title>
                    Admin | Open Apple Store
                </title>
            </Head>
            <Header />
            {
                session?.user?.email === 'theabhayprajapati@outlook.com' ? (
                    <main className='bg-white max-w-6xl mx-auto border-2  border-black p-4' >
                        {/* adding modelname, price, category, series more. */}
                        <InputFeild />
                        <Specs />
                        <AddImages />
                        <Colors />
                        <button
                            disabled={buttonstatus}
                            className='py-2 px-4 bg-orange-500 text-white focus:ring-white rounded-lg'
                            onClick={(e) => addTomongo(iPhoneOriginal, e)}
                        >
                            Add to Mongo
                        </button>
                    </main>
                ) : (
                    <main className='max-w-6xl  mx-auto font-extrabold'>
                        <section className='mt-10'>
                            <h1 className='text-xl font-extrabold text-white'>
                                You are not authorized to access this page, at this moment.
                            </h1>
                        </section>
                        <section>
                            <h1 className='text-6xl md:text-8xl font-extrabold text-white break-words'>
                                <span className="blue">
                                    Connect</span> us on <span className="cursor-pointer green rounded-lg" tabIndex={0} onClick={() => router.push('https://github.com/theabhayprajapati/Open-Apple-Store')} >GitHub</span> for <span className="pink">
                                    Contribution.
                                </span>
                            </h1>
                            <div className="mt-10 flex md:flex-row flex-col gap-3">
                                <button onClick={() => router.push('https://twitter.com/AbhayPrajapati_')} className="text-white font-extrabold bg-white rounded-md py-2 px-4 hover:ring focus:scale-95 text-xl w-full flex justify-center items-center text-center gap-3">
                                    <img src="https://avatars.githubusercontent.com/u/88815641?v=4" className='h-10 w-10 border-2 border-gray-600  rounded-full' alt="" />
                                    <h1 className='blue'>
                                        Twitter.
                                    </h1>
                                </button>
                                <button onClick={() => router.push('https://github.com/theabhayprajapati/Open-Apple-Store')} className="text-white font-extrabold bg-white hover:ring rounded-md py-2 px-4 text-xl w-full flex justify-center items-center text-center gap-3">
                                    <img src="https://avatars.githubusercontent.com/u/88815641?v=4" className='h-10 w-10 border-2 border-gray-600 rounded-full' alt="" />
                                    <h1 className='green'>
                                        GitHub.
                                    </h1>
                                </button>
                            </div>
                        </section>
                    </main>
                )
            }


        </div >
    )
}

export default AdminForOAS