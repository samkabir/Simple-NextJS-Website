import { connectToDatabase } from ".././../../util/mongodb";

export default async function handler(req, res){
    const { db } = await connectToDatabase();
    
    console.log(req.body);
    const data = req.body;

    const response = await db.collection("cars").insertOne(data);

    res.json(response);
}