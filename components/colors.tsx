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
        <div>Colors

            <div>
                {morecolors.map((item: any, index: number) => {
                    return (
                        <div key={index}>
                            <input type="text" name="value" placeholder='enter value' onChange={(e: any) => modifyInput(e, index)} />
                            <input type="text" name="additional_price" placeholder="Enter additional price" onChange={(e: any) => modifyInput(e, index)} />
                        </div>)
                })}
            </div>
            <button onClick={() => addmorecolors()}>Add Color</button>
            <button onClick={() => done()}>Done</button>

        </div>
    )
}

export default Colors