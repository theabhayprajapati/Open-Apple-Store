import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { iPhoneState } from '../atoms/iphoneatoms';
import AddImages from '../components/addimages';
import Colors from '../components/colors';
import InputFeild from '../components/inputField';
import Specs from '../components/specs';
const product = {

}
const AdminForOAS = () => {
    // TODO: make a post request with fetch

    // make a product object
    const iPhoneOriginal = useRecoilValue(iPhoneState)

    const addTomongo = async (iPhoneOriginal: any, e: any) => {
        e.preventDefault()
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


    }
    return (
        <div className="bg-white">
            <Head>
                <title>
                    Admin | Open Apple Store
                </title>
            </Head>
            <main className='max-w-6xl mx-auto border-2  border-black p-4' >
                {/* adding modelname, price, category, series more. */}
                <InputFeild />
                <Specs />
                <AddImages />
                <Colors />
                <button
                    onClick={(e) => addTomongo(iPhoneOriginal, e)}
                >
                    Add to Mongo
                </button>
            </main>

            <main className='max-w-6xl mx-auto border-2'>
            </main>
        </div >
    )
}

export default AdminForOAS