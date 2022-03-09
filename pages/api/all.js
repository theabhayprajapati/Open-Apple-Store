import { ObjectId } from "mongodb"
import clientPromise from "../../lib/mongodb"

export default async function handler(req, res, next) {
    // const query = req.query.moviedetails
    // console.log(query, 'queryid')
    const client = await clientPromise
    const db = await client.db('products')
    // get all data form mongodb
    const data = await db.collection('open-apple-store').find({}).toArray()
    // console.log(data.createdAt, "Product Name")
    data.map(
        (item) => {
            console.log(item.createdAt, "Product Name")
        }
    )
    res.json({
        data
    })
}

