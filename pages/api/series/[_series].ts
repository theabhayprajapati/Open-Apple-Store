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
    if(m.length==0){
        res.status(404).json({
            message: "⛔! try to enter proper series name",
            "Series": ["MacBook Air","MacBook Pro" ,"MacBook Pro 13","MacBook Pro 14","MacBook Pro 16", "iPhone 13", "iPhone __", "Series 7", "Series __", "iMac"],
            reach_me_out: "twitter.com/abhayprajapati_",
        })
    }

    res.json({
        data: m
    })
}

