import clientPromise from "../../../lib/mongodb"
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    // const query = req.query.moviedetails
    const { query } = req
    console.log(query.type, 'query.type🧠')

    const client = await clientPromise
    const db = await client.db('products')
    // get all data form mongodb
    const data = await db.collection('open-apple-store').find({        category: query.type
    }).toArray()

   
    // parse data to json
    // JSON Stringify
    const m = JSON.parse(JSON.stringify(data))
    if(m.length==0){
        res.json({
            "Categories": ['Mac', "iPhone", "iPad", "Apple Watch"]
        })
    }
    res.json({ data: m })
    
}

