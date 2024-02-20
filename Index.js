const express=require('express');
const dotenv=require('dotenv');
const dbConnect=require('./DbConnect');
const cors=require('cors');
const testRouter=require('./Router/TestRouter')
dotenv.config('./env');



const app=express();


let origin = 'http://localhost:3000';

if(process.env.NODE_ENV === 'production') {
    origin = process.env.CORS_ORIGIN;
}

app.use(cors({
    credentials:true,
    origin
}))


app.use(express.json({limit:'10mb'}));
app.use('/test',testRouter);

app.get('/' , (req,res) => {
    res.status(200).send("i m in");
});

const PORT=process.env.PORT||4001;
dbConnect();
app.listen(PORT,()=>{
    console.log(`listeing to port ${PORT}`)
})