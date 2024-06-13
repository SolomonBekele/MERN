import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDb.js"
const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello world")
});

app.use("/api/auth",authRoutes)


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server running on port ${PORT}`)
})