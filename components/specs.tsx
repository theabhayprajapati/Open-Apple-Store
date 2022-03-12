import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { iPhoneState } from '../atoms/iphoneatoms'


const storagetemMode = {
    value: '',
    unit: '',
    additional_price: {
        IN: '',
        US: ''
    }
}
const Specs = () => {
    const [storagetem, setStoragetem] = useState<any>([storagetemMode])
    const [OrigianliPhoneState, setOrigianliPhoneState] = useRecoilState<any>(iPhoneState)

    const moreStoreitem = () => setStoragetem([
        ...storagetem,
        storagetemMode
    ])
    const handleChange = (e: any, index: number) => {
        const { name, value } = e.target
        storagetem[index] = {
            ...storagetem[index],
            [name]: value
        }
        setStoragetem([...storagetem])
    }


    const handlePrices = (e: any, index: number) => {
        const { name, value } = e.target
        storagetem[index].additional_price = {
            ...storagetem[index].additional_price,
            [name]: value
        }
    }
    const addtoIphoneState = (storagetem: any) => {
        setOrigianliPhoneState(
            {
                ...OrigianliPhoneState,
                specs: {
                    ...OrigianliPhoneState.specs,
                    storage_capacity: storagetem
                }
            }
        )
    }
    const removestoaragetem = (index: number) => {
        setStoragetem([
            ...storagetem.slice(0, index),
            ...storagetem.slice(index + 1),
        ])
    }



    useEffect(() => {
        console.log(storagetem, 'storagetem')
        console.log(OrigianliPhoneState, 'OrigianliPhoneState')
    }, [storagetem, handleChange, handlePrices, addtoIphoneState])
    return (
        <div>
            <main className="text-xl flex flex-col md:flex-row flex-wrap">
                {
                    storagetem.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <input type="text" name="value" placeholder='Storage Value' onChange={(e) => handleChange(e, index)} />
                                <input type="text" name="unit" placeholder='Storage Unit' onChange={(e) => handleChange(e, index)} />
                                <input type="text" name="IN" placeholder='IN' onChange={(e) => handlePrices(e, index)} />
                                <input type="text" name="US" placeholder='US' onChange={(e) => handlePrices(e, index)} />
                                <button className='bg-red-500 px-4 py-2 rounded-lg text-white focus:ring ring-white' onClick={() => removestoaragetem(index)}>Remove</button>

                            </div>)
                    })
                }

                <button className="py-2 px-4 bg-blue-500 text-white focus:ring-white rounded-lg" onClick={() => moreStoreitem()}>Add More</button>
                <button
                    className='py-2 px-4 bg-orange-500 text-white focus:ring-white rounded-lg'
                    onClick={() => addtoIphoneState(storagetem)}
                >
                    Add to iPhone State
                </button>
            </main>
        </div>
    )
}

export default Specs