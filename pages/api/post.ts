import { Timestamp } from "mongodb"
import clientPromise from "../../lib/mongodb"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const { body, method } = req
    console.log(body);

    const client = await clientPromise
    const db = await client.db('products')
    console.log(body, 'body🧠');





    console.log()
    if (method === 'POST') {
        const data = await db.collection('open-apple-store').insertOne(
            body
        )
    }


    res.json({
        body
    })
}   