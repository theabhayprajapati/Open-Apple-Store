// import React from 'react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { iPhoneState } from '../atoms/iphoneatoms'

const con = {
    name: '',
    additional_price: {
        IN: '',
        US: ''
    },
}
const Connectivity = () => {
    const [connectivity, setconnectivity] = useState([con])
    const [OrigianliPhoneState, setOrigianliPhoneState] = useRecoilState<any>(iPhoneState)
    const addmore = () => {
        setconnectivity([...connectivity, con])
    }
    // remove connectivity
    
    // add to original statepinde
    const addtooriginal = () => {
        setOrigianliPhoneState({
            ...OrigianliPhoneState,
            specs: {
                ...OrigianliPhoneState.specs,
                connectivity: connectivity
            }
        })
    }
    return (
        <div>
            {
                connectivity.map((con, index) => {
                    return (
                        <div key={index}>
                            <input type="text" name="name" value={con.name} placeholder='Name' onChange={(e) => setconnectivity([...connectivity.slice(0, index), { ...connectivity[index], name: e.target.value }, ...connectivity.slice(index + 1)])} />
                            <input type="text" name="IN" value={con.additional_price.IN} placeholder='Additional IN' onChange={(e) => setconnectivity([...connectivity.slice(0, index), { ...connectivity[index], additional_price: { ...connectivity[index].additional_price, IN: e.target.value } }, ...connectivity.slice(index + 1)])} />
                            <input type="text" name="US" value={con.additional_price.US} placeholder='Additional US' onChange={(e) => setconnectivity([...connectivity.slice(0, index), { ...connectivity[index], additional_price: { ...connectivity[index].additional_price, US: e.target.value } }, ...connectivity.slice(index + 1)])} />
                            <button onClick={() => setconnectivity([...connectivity.slice(0, index), ...connectivity.slice(index + 1)])}>Remove</button>
                        </div>
                    )
                })
            }
            <button onClick={addmore}>Add More</button>
            <button onClick={addtooriginal}>Add to Original</button>
        </div>
    )
}

export default Connectivity