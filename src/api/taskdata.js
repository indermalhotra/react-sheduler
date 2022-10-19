import { MongoClient } from "mongodb";

const connectDatabase = async () => {
    // CONNECTED TO DATABASE newsletter1
    const client = await MongoClient.connect('mongodb+srv://ekum:xOVeZSngVLNm7WSH@cluster0.kv1cwcj.mongodb.net/newsletter1?retryWrites=true&w=majority');

    return client;
}

const postData = (client, data) =>{
    const db = client.db();
    let tasks = db.collections("tasks");

    tasks.insertOne(data);
}

const handler = async(req, res) => {
    let client;
    let response = JSON.parse(req.body);
    if(req.method === "POST"){
        try{
            client = await connectDatabase();
        }catch(err){
            res.status(500).json({message:"Can not connect to database"});
        }

        try{    
            postData(client,response);
            res.status(200).json({message:"data posted.."})
        }catch(err){
            res.status(500).json({message:"can't send data to database"})
        }
        
    }
}

export default handler;