import cors from "cors";
import express from "express";
import { initRoutes } from "./routes/routes.js";

import "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

app.use("/", express.static("./client/build"));

app.post(initRoutes.authRoutes, (req, res) => {console.log(req.body); res.json({success: true})})

const port = 3050;
app.listen(port, () => {});

export { app };
