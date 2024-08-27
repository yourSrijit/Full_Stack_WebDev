import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import path from "path"


dotenv.config();

const port=process.env.PORT || 5000;
const app=express();
const __dirname=path.resolve();

app.use(cors({origin:"http://localhost:5173",credentials:true}))

app.use(express.json()); //allow us to parse incoming requests :req.body
app.use(cookieParser());// allow us to parse incoming cookies

app.use("/api/auth",authRouter);

app.use(express.static(path.join(__dirname,"/frontend/dist")))


app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});


app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})