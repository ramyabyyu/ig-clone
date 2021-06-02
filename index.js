import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import api from "./routes/api.js";

const app = express();
dotenv.config();

// middlewares
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// static files
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use("/content", express.static(path.join(__dirname, "public")));

// apis
app.use("/api", api);

// db and server connection
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("MongoDB ready!");
    app.listen(port, () => console.log("Server Ready"));
  })
  .catch((err) => console.log(err));
