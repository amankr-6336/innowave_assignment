const mongoose=require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

mongoose.set('strictQuery',true);


module.exports=async()=>{
    const mongoUri=`mongodb+srv://amanhost18:Callofduty@cluster0.ueu6ft7.mongodb.net/?retryWrites=true&w=majority`

    try {
        const connect=await mongoose.connect(mongoUri, {serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }})

          console.log(`mongodb Connection: ${connect.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}