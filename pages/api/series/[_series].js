import { ObjectId } from "mongodb"
import clientPromise from "../../../lib/mongodb"


export default async function handler(req, res, next) {
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

    console.log(data)


    res.json(data)
}

