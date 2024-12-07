import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./route/userRoutes.js";
const app = express();
app.use(express.json);

app.use("/api/users", userRoutes);

dotenv.config();
connectDB();
const PORT = 5000;
app.listen(PORT, console.log(`Server is running in ${PORT}`));
