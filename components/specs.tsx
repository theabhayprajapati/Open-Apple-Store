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


    useEffect(() => {
        console.log(storagetem, 'storagetem')
        console.log(OrigianliPhoneState, 'OrigianliPhoneState')
    }, [storagetem, handleChange, handlePrices, addtoIphoneState])
    return (
        <div>
            <main>
                {
                    storagetem.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <input type="text" name="value" placeholder='Storage Value' onChange={(e) => handleChange(e, index)} />
                                <input type="text" name="unit" placeholder='Storage Unit' onChange={(e) => handleChange(e, index)} />
                                <input type="text" name="IN" placeholder='IN' onChange={(e) => handlePrices(e, index)} />
                                <input type="text" name="US" placeholder='US' onChange={(e) => handlePrices(e, index)} />
                            </div>)
                    })
                }

                <button onClick={() => moreStoreitem()}>Add More</button>
                <button
                    onClick={() => addtoIphoneState(storagetem)}
                >
                    Add to iPhone State
                </button>
            </main>
        </div>
    )
}

export default Specs