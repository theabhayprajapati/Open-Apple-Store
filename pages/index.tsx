import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import clientPromise from '../lib/mongodb'

const Home: NextPage = () => {
  // fetch api

  return (
    <div className=' dark:bg-black dark:text-white min-w-full min-h-screen'>
      <Head>
        <title>
          Open Apple Store
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-6xl'>
          This is Open Apple Store
        </h1>
        <h1>
          start fetching data with
        </h1>
        <div className="flex flex-col border-2">
          <code className='text-white'>const data = await fetch('https://oas.vercel.app/api/all')</code>
          <code className='text-white'>const json = await data.json()</code>
          <code className='text-white'>console.log(json)</code></div>

      </main>
    </div >
  )
}

export default Home
