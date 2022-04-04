import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Code from '../components/styles/code'
import Header from '../components/styles/Header'
import Landing from '../components/styles/landing'
import LowerLanding from '../components/styles/lowerlanding'
import clientPromise from '../lib/mongodb'

const Home: NextPage = () => {
  // fetch api


  return (

    <div className="relative min-w-full md:p-10">
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
      <LowerLanding />
      <div className='grid place-items-center'>
        <h1 className='text-blue-500 cursor-pointer hover:scale-95 focus:scale-95 transform transition-all duration-200'>
          @abhayprajapati_
        </h1>
      </div>
    </div>
  )
}

export default Home

