import { ObjectId } from "mongodb"
import clientPromise from "../../lib/mongodb"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    // const query = req.query.moviedetails
    console.log(req)
    const client = await clientPromise
    const db = await client.db('products')
    // get all data form mongodb
    const data = await db.collection('open-apple-store').find({
        // _id: new ObjectId(query)
    }).toArray()
    console.log(data);
    res.json({
        data
    })
}

