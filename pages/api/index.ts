import { ObjectId } from "mongodb"
import clientPromise from "../../lib/mongodb"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    // const query = req.query.moviedetails
    const { query } = req
    console.log(query)


    // // update query.category value
    // // uppercase first letter of query.category value
    // // query.category = 
    // let name:any = query.category

    // // update convert objects value to string.
    // // query.category = query.category.toString()

    // function updatename(name:any) {
    //     if (name === 'mac') {
    //         name = name.charAt(0).toUpperCase() + name.slice(1)
    //         return Object.keys(query).forEach(function (key) {
    //             if (key === 'category') {
    //                 query.category = name
    //             }
    //         }
    //         )
    //     }
    //     name = 'i' + name.charAt(1).toUpperCase() + name.slice(2)
    //     return Object.keys(query).forEach(function (key) {
    //         if (key === 'category') {
    //             query.category = name
    //         }
    //     }
    //     )


    // }
    // // console.log(name, 'NAME')
    // const obj = {
    //     category: 'iPhone',
    //     series: 'iPhone 13'
    // }

    // updatename(name)
    // console.log(query.category, 'updated category name')


    // const client = await clientPromise
    // const db = await client.db('products')
    // // get all data form mongodb
    // const data = await db.collection('open-apple-store').find(obj).toArray()

    // console.log(data)
    // // parse data to json
    // // JSON Stringify
    // const m = JSON.parse(JSON.stringify(data))
    // alert("hello")
    // alert with hello message
    // console.log(m)
     
    res.json({
        OpenSoure_Apple_Store: {
            '/id': "/622b82b80846de00fe026d37",
           
                "/category": ["Mac", "iPhone", "iPad", "Watch"],
           
            "/series": ["MacBook Air" , "iPhone 13", "iPad", "Watch Series 3"],
            '/all' : '/all'
        }
    })
}

