import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Code from '../components/styles/code'
import Header from '../components/styles/Header'
import Landing from '../components/styles/landing'
import clientPromise from '../lib/mongodb'

const Home: NextPage = () => {
  // fetch api


  return (

    <div className="min-w-full md:p-10">
      <Head>
        <title>
          Home | Open Apple Store
        </title>
      </Head>
      {/* //? Header */}
      <Header />
      {/* //? Main */}
      <main className='max-w-7xl mt-28  md:mx-auto grid grid-cols-1 md:grid-cols-2 m-3  text-white'>
        <Landing />
        <div className='bg-gradient-to-tr from-pink-500 via-fuchsia-500 md:p-5 p-2 to-purple-500 md:rounded-3xl rounded-lg mt-10 md:mt-0'>
          <div className='bg-gray-800 h-full md:rounded-3xl rounded-xl p-3'>
            <Code />
          </div>
        </div>
      </main>
      <main className='max-w-5xl mx-auto '>
        <div>
          <h1 className='text-8xl font-extrabold text-black'>
            No API keys Ever, JUST <span className="text-blue-500">
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
      </main>
    </div>
  )
}

export default Home
