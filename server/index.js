import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// connect to mongoDB
try {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB ------");
} catch (error) {
    console.log("Error: ");
}


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});