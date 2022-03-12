import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { iPhoneState } from '../atoms/iphoneatoms';

const productdetails = {
    modelname: '',
    price: {
        IN: '',
        USD: ''
    },
    specs: {
        display: {
            size: '',
            units: '',
        },

    },
    category: '',
    series: '',

}
const InputFeild = () => {
    const [product, setProduct] = useState(productdetails)
    const [OrigianliPhoneState, setOrigianliPhoneState] = useRecoilState<any>(iPhoneState)

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }

    const handlespecs = (e: any) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            specs: {
                ...product.specs,
                display: {
                    ...product.specs.display,
                    [name]: value
                }
            }
        })
    }
    const handlePrices = (e: any) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            price: {
                ...product.price,
                [name]: value
            }
        })
    }
    const addtoIphoneState = (product: any) => {
        setOrigianliPhoneState(
            {
                ...OrigianliPhoneState,
                ...product
            }
        )
    }


    useEffect(() => {
        console.log(product, 'we are in the useEffect function')
        console.log(OrigianliPhoneState, 'we are in the useEffect function ORIGIANL STATE')
    }, [handleChange, handlespecs, handlePrices])


    return (
        <div className='flex flex-col md:flex-row flex-wrap gap-4 text-xl'>
            <input type="text" name="modelname" placeholder="Model Name" onChange={(e) => handleChange(e)} />
            <input type="text" name="IN" placeholder="IN" onChange={(e) => handlePrices(e)} />
            <input type="text" name="USD" placeholder="US" onChange={(e) => handlePrices(e)} />
            <input type="text" name="size" placeholder="Display" onChange={(e) => handlespecs(e)} />
            <input type="text" name="units" placeholder="Units" onChange={(e) => handlespecs(e)} />
            <input type="text" name="category" placeholder="Category" onChange={(e) => handleChange(e)} />
            <input type="text" name="series" placeholder="Series" onChange={(e) => handleChange(e)} />
            <button
                className='py-2 px-4 bg-orange-500 text-white focus:ring-white rounded-lg'
                onClick={() => addtoIphoneState(product)}
            >Add</button>
        </div>
    )
}

export default InputFeild