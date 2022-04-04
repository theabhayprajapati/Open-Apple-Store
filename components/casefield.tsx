import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { iPhoneState } from '../atoms/iphoneatoms'

const casedetails = {
    case_size: '',
    unit: '',
    additional_price: {
        IN: '',
        US: ''
    },
}
const CaseFieldInput = () => {
    const [casefield, setcasefield] = useState([casedetails])
    const [OrigianliiPhoneState, setOrigianliiPhoneState] = useRecoilState<any>(iPhoneState)
    const morecasefields = () => {
        setcasefield([...casefield, casedetails])
    }
    // remove casesize with index
    const removecasefield = (index: number) => {
        setcasefield([
            ...casefield.slice(0, index),
            ...casefield.slice(index + 1),
        ])
    }

    // add to original state
    const addtooriginal = () => {
        setOrigianliiPhoneState({
            ...OrigianliiPhoneState,
            specs: {
                ...OrigianliiPhoneState.specs,
                case: casefield
            }
        })
    }
    return (
        <div>
            <div>
                {
                    casefield.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <h1>
                                    Case Size
                                </h1>
                                <input type="text" name="case_size" value={item.case_size} placeholder="Case Size" onChange={(e) => {
                                    setcasefield([
                                        ...casefield.slice(0, index),
                                        {
                                            ...casefield[index],
                                            case_size: e.target.value
                                        },
                                        ...casefield.slice(index + 1),
                                    ])
                                }} />
                                {/* inpyt for case units */}
                                <h1>
                                    Case Unit
                                </h1>
                                <input type="text" name="unit" value={item.unit} placeholder="Case Unit" onChange={(e) => {
                                    setcasefield([
                                        ...casefield.slice(0, index),
                                        {
                                            ...casefield[index],
                                            unit: e.target.value
                                        },
                                        ...casefield.slice(index + 1),
                                    ])
                                }} />



                                <input type="text" name="additional_price.IN" placeholder="Indian Price" value={item.additional_price.IN} onChange={(e) => {
                                    setcasefield([
                                        ...casefield.slice(0, index),
                                        {
                                            ...casefield[index],
                                            additional_price: {
                                                ...casefield[index].additional_price,
                                                IN: e.target.value
                                            }
                                        },
                                        ...casefield.slice(index + 1),
                                    ])
                                }} />
                                <input type="text" name="additional_price.US" value={item.additional_price.US} placeholder="US Price" onChange={(e) => {
                                    setcasefield([
                                        ...casefield.slice(0, index),
                                        {
                                            ...casefield[index],
                                            additional_price: {
                                                ...casefield[index].additional_price,
                                                US: e.target.value
                                            }
                                        },
                                        ...casefield.slice(index + 1),
                                    ])
                                }} />
                                <button onClick={() => removecasefield(index)}>Remove</button>

                            </div>
                        )

                    })}
            </div>
            <button onClick={() => morecasefields()} className="bg-blue-500 rounded-md py-2 px-4">
                Add  more
            </button>
            <button className="bg-orange-500 rounded-md py-2 px-4" onClick={addtooriginal}>
                Add to original
            </button>
        </div>
    )
}

export default CaseFieldInput