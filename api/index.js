import express from 'express'
import mongoose from 'mongoose'
import dotenv from'dotenv'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import Userrouter from './routes/user.route.js';
import Authrouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';

dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("connected to mongoose")
}).catch((err)=>{
    console.log(err)
})

const app = express()
const port = 3000

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/api/user",Userrouter);
app.use("/api/auth",Authrouter);
app.use('/api/listing', listingRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use((err,req,res,next)=>{
    console.log(err)
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});