import clientPromise from "../../../lib/mongodb"
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    res.json({
        "Series" :["MacBook Air","MacBook Pro" ,"MacBook Pro 13","MacBook Pro 14","MacBook Pro 16", "iPhone 13", "iPhone __", "Series 7", "Series __", "iMac"]
    })
}

