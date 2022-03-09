import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminForOAS = () => {
    // TODO: make a post request with fetch
    const [articlesID, setArticleId] = useState("index")

    // make a product object
    const product = {
        product_name: "MacBook Pro",
        product_price: {
            IN: 109000,
            US: 999,
            GBP: 899,
        },
        product_description: "Id culpa aliquip ipsum excepteur sunt incididunt laboris magna incididunt nostrud."
    }

    
    const addTomongo = async (e: any) => {
        e.preventDefault()

        const response = await fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const body = await response.json()
        console.log(body, 'we are in the addTomongo function')

    }
    return (
        <div>
            <button onClick={addTomongo}>
                Add to mongo
            </button>
        </div>
    )
}

export default AdminForOAS