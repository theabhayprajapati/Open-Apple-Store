import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { iPhoneState } from '../atoms/iphoneatoms'

const image = {
    url: '',
    title: '',
    additional_price: {
        IN: '',
        US: ''
    },

}
const AddImages = () => {
    const [images, setimages] = useState([image])
    const [OrigianliPhoneState, setOrigianliPhoneState] = useRecoilState<any>(iPhoneState)
    const addmore = () => {
        setimages([...images, image])
    }



    const updateimages = (e: any, index: number) => {
        setimages([
            ...images.slice(0, index),
            {
                ...images[index],
                [e.target.name]: e.target.value,
            },
            ...images.slice(index + 1),
        ])
    }

    const updatePrices = (e: any, index: number) => {
        setimages([
            ...images.slice(0, index),
            {
                ...images[index],
                additional_price: {
                    ...images[index].additional_price,

                    [e.target.name]: e.target.value,
                },
            },
            ...images.slice(index + 1),
        ])
    }



    const addtooriginal = () => {
        setOrigianliPhoneState({
            ...OrigianliPhoneState,
            images: images
        })
    }

    useEffect(() => {
        console.log(images)
        console.log(OrigianliPhoneState, 'ORIGINAL IPHONE STATE')
    }, [images, updateimages, addtooriginal])



    return (
        <div>
            <main>
                {
                    images.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <input type="text" placeholder='url' name="url" onChange={(e) => updateimages(e, index)} />
                                <input type="text" placeholder='Enter title' name="title" onChange={(e) => updateimages(e, index)} />
                                <input type="text" placeholder='Indian price' name="IN" onChange={(e) => updatePrices(e, index)} />
                                <input type="text" placeholder='US Price' name="US" onChange={(e) => updatePrices(e, index)} />
                            </div>
                        )
                    })
                }
                <button onClick={addmore}>Add More</button>
                <button onClick={addtooriginal}>Add to Original</button>
            </main>
            <div>
                <h1>{OrigianliPhoneState?.images?.length}</h1>
                <h1>
                    {OrigianliPhoneState?.modelname}
                    {OrigianliPhoneState?.category}

                </h1>
            </div>
        </div>
    )
}

export default AddImages