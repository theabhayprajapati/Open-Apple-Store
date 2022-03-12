import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { iPhoneState } from '../atoms/iphoneatoms'


const colors: any = {
    value: '',
    additional_price: '',
}
const Colors = () => {

    const [origianlProduct, setorigianlProduct] = useRecoilState<any>(iPhoneState)

    const [morecolors, setmorecolors] = useState<any>([colors])

    const addmorecolors = () => {
        setmorecolors([...morecolors, colors])
    }

    const modifyInput = (e: any, index: number) => {
        morecolors[index] = {
            ...morecolors[index],
            [e.target.name]: e.target.value
        }
        setmorecolors([...morecolors])
    }
    const removermorecolor = (index: number) => {
        setmorecolors([
            ...morecolors.slice(0, index),
            ...morecolors.slice(index + 1),
        ])
    }

    const done = () => {
        setorigianlProduct({
            ...origianlProduct,
            specs: {
                ...origianlProduct.specs,
                color: morecolors
            }
        })
    }


    return (
        <div>
            <h1 className='text-xl font-bold flex gap-3 flex-col md:flex-row '>
                Colors
            </h1>

            <div className="text-2xl flex flex-col gap-3 md:flex-row flex-wrap">
                {morecolors.map((item: any, index: number) => {
                    return (
                        <div key={index}>
                            <input type="text" name="value" placeholder='enter value' onChange={(e: any) => modifyInput(e, index)} />
                            <input type="text" name="additional_price" placeholder="Enter additional price" onChange={(e: any) => modifyInput(e, index)} />
                            <button onClick={() => removermorecolor(index)} className='bg-red-500 px-4 py-2 rounded-lg text-white focus:ring ring-white'>Remove</button>
                        </div>)
                })}
            </div>
            <button onClick={() => addmorecolors()} className='bg-blue-500 px-4 py-2 rounded-lg text-white focus:ring ring-white'>Add Color</button>
            <button className='bg-blue-500 px-4 py-2 rounded-lg text-white focus:ring ring-white' onClick={() => done()}>Done</button>

        </div>
    )
}

export default Colors