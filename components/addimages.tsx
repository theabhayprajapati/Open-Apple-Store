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

    const removeimage = (index: number) => {
        setimages([
            ...images.slice(0, index),
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
            <main className='text-xl flex flex-col md:flex-row flex-wrap'>
                {
                    images.map((item: any, index: number) => {
                        return (
                            <div key={index} className='text-2xl'>
                                <input type="text" placeholder='url' name="url" onChange={(e) => updateimages(e, index)} />
                                <input type="text" placeholder='Enter title' name="title" onChange={(e) => updateimages(e, index)} />
                                <input type="text" placeholder='Indian price' name="IN" onChange={(e) => updatePrices(e, index)} />
                                <input type="text" placeholder='US Price' name="US" onChange={(e) => updatePrices(e, index)} />
                                {/* remove image buttonb */}
                                <button className='bg-red-500 px-4 py-2 rounded-lg text-white focus:ring ring-white' onClick={() => removeimage(index)}>Remove</button>

                            </div>
                        )
                    })
                }
                <button onClick={addmore} className='bg-blue-500 px-4 py-2 rounded-lg text-white focus:ring ring-white'>Add More</button>
                <button onClick={addtooriginal} className='bg-orange-500 px-4 py-2 rounded-lg text-white focus:ring ring-white'>Add to Original</button>
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