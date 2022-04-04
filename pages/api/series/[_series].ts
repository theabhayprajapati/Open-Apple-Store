import { ObjectId } from "mongodb"
import clientPromise from "../../../lib/mongodb"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    // const query = req.query.moviedetails
    const { query } = req
    console.log(query)
    const client = await clientPromise
    const db = await client.db('products')
    // get all data form mongodb
    const data = await db.collection('open-apple-store').find(
        {
            series: String(query._series)
        }
    ).toArray()
    // solve the array literal error.
    const m = JSON.parse(JSON.stringify(data))
    // console.log(data)
    if(m==null){
        res.status(404).json({
            series: ["iPhone 13", "MacBook Air", "MacBook Pro"],
            reach_me_out: "twitter.com/abhayprajapati_",
        })
    }
    console.log(m)
    res.json(data)
}

