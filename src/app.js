import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 

const app = express();
dotenv.config();


// Middlewares
app.use(express.json());
app.use(cors({
        origin:"*",
        methods:"GET,POST,PUT,DELETE",
}));


// Routes
app.get("/", (req, res) => {
    res.send("App is running");
});

app.get("/health-check", (req, res) => {
    res.send("Health is OK");
});

export default app;