import { ObjectId } from "mongodb"
import clientPromise from "../../lib/mongodb"
import type { NextApiRequest, NextApiResponse } from 'next'

// import req and res from next
export default async (req:NextApiRequest, res:NextApiResponse) => {
    const queryId:any = req.query._id
    console.log(queryId)
    const client = await clientPromise
    const db = client.db('products')
    if (queryId.length < 12) {
        res.status(400).json({
            message: "Invalid id",
            sampleid: "622b82b80846de00fe026d37",
            reach_me_out: "twitter.com/abhayprajapati_",
        })
    }
    const data = await db.collection('open-apple-store').findOne({
        _id: new ObjectId(queryId),
    })
    // solve the array literal error.
    const m = JSON.parse(JSON.stringify(data))
    if(m==null){
        res.status(404).json({
            message: "⛔! try to enter proper id",
            Manual : "https://github.com/theabhayprajapati/Open-Apple-Store#_id",
            reach_me_out: "twitter.com/abhayprajapati_",
        })
    }
    // console.log(m)
    res.json({
        data: m
    })
}