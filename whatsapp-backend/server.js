// import express from 'express';
const express= require('express');
const mongoose= require('mongoose');
const app=express();
const port = process.env.PORT || 9000;
const cors=require('cors');
const messagecontents =require("../whatsapp-backend/dbMessages");
const Pusher =require('pusher');

const pusher = new Pusher({
    appId: '1083710',
    key: 'c73ec66f55e472cde9a4',
    secret: '67494fe9ad070cadb74c',
    cluster: 'ap2',
    encrypted: true
  });



//middlewares
app.use(express.json());
app.use(cors());

// app.use((req,res,next)=>{
//         res.setHeader("Access-Control-Allow-Origin","*");
//         res.setHeader("Access-Control-Allow-Headers","*");
//         next();
// });

//<admin:whatsapp-clone-45>

//DB config
const connecttion_url=' mongodb+srv://<//>@cluster0.7soft.mongodb.net/whatsapp-backend?retryWrites=true&w=majority';
mongoose.connect(connecttion_url,{
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology: true
})

const db=mongoose.connection;

db.once('open',()=>{
    console.log("DB is connected");

    const msgCollection =db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change',(change)=>{
        console.log(change);

        if(change.operationType === 'insert'){
            const messageDetails =change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp:messageDetails.timestamp,
                received: messageDetails.received
            });
        } else{
            console.log("Error in triggering");
        }
    });
});


//api routes
app.get('/',(req,res)=>res.status(200).send("hello World"))

app.get('/messages/sync',(req,res)=>{
    messagecontents.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
});


app.post('/messages/new', (req,res)=>{
    const  dbMessage = req.body;

    messagecontents.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});


//listen
app.listen(port,()=>console.log(`listening on localHost ::: ${port}`));