import express from 'express'
import cors from "cors";
import "dotenv/config";
import connectDB from './config/mongodb.js';
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";
import connectCloudinary from './config/cloudinary.js';
import donationRouter from './routes/donationRoute.js';
import router from './routes/upload.js'

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

// middlewares
app.use(express.json());

app.use(
    cors({
        origin: ['https://dirghayu-medicare-aocc-8rvuja28f-paridhis-projects-96f99c4a.vercel.app/', 'https://dirghayu-medicare-orras473o-paridhis-projects-96f99c4a.vercel.app/'],
        credentials:true,
    })
)
app.use('/api', router)

// api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);
app.use("/api/donation",donationRouter)

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server started", port));