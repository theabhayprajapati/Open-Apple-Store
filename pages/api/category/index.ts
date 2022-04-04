import clientPromise from "../../../lib/mongodb"
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    res.json({
        "Categories": ['MacBook', "iPhone", "iPad", "Watch"]
    })
}

