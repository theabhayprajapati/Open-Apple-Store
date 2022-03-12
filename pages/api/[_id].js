import { ObjectId } from "mongodb"
import clientPromise from "../../lib/mongodb"

export default async (req, res, next) => {
    const queryId = req.query._id
    console.log(queryId)
    const client = await clientPromise
    const db = client.db('products')
    const data = await db.collection('open-apple-store').findOne({
        _id: new ObjectId(queryId),
    })
    // solve the array literal error.
    const m = JSON.parse(JSON.stringify(data))

    res.json({
        data: m
    })
}