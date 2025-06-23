import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Transaction from '../models/transaction.js';
// import mongoose from 'mongoose';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });


app.get('/',(req,res)=>{
    res.end('hello')
})

app.get('/api/test',(req,res)=>{
    res.json('test ok2');
})
app.post('/api/transactions',async(req,res)=>{
    // console.log(process.env.MONGO_URL)
    // mongoose.connect('MONGO_URL');
    const {name,description,datetime,price}=req.body;
    const newtransaction = await Transaction.create({name,description,datetime,price})
    res.json(newtransaction);
})


app.get('/api/transactions',async(req,res)=>{
await mongoose.connect(process.env.MONGO_URL)
const transactions = await Transaction.find()
res.json(transactions)
})

app.listen(4040,()=>{
    console.log('server running on http://localhost:4040')
}); 