import { ObjectId } from "mongodb"
import clientPromise from "../../../lib/mongodb"


export default async function handler(req, res, next) {
    // const query = req.query.moviedetails
    const { query } = req
    console.log(query.type, 'query.type🧠')

    console.log(req)
    let name = query.type
    function updatename(name) {
        if (name === 'mac') {
            name = name.charAt(0).toUpperCase() + name.slice(1)
            return Object.keys(query).forEach(function (key) {
                query.type = name
            }
            )
        }
        name = 'i' + name.charAt(1).toUpperCase() + name.slice(2)
        return Object.keys(query).forEach(function (key) {
            query.type = name
        }
        )
    }
    updatename(name)
    // upppercase the first 
    // convert query to string
    const str = JSON.stringify(query)


    const client = await clientPromise
    const db = await client.db('products')
    // get all data form mongodb
    const data = await db.collection('open-apple-store').find({
        category: query.type

    }).toArray()

    console.log(data)
    // parse data to json
    // JSON Stringify
    const m = JSON.parse(JSON.stringify(data))
    console.log(m)
    res.json({ data: m })
    
}

