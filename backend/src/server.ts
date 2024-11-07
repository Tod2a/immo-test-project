import express, { Request, Response } from "express";
import { connectDB } from "./config/database";
import bodyParser from "body-parser";
import cors from "cors";
import immoRoutes from "./routes/immoRoutes";
import immoform from "./routes/immoForm";
import path from 'path';

const app = express();
app.use(cors());

connectDB();

app.set("port", process.env.PORT || 5050);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/assets/images', express.static(path.join(__dirname, 'assets/images')));

app.get("/", (_req: Request, res: Response) => {
    res.send("API Running");
});

app.use("/api/immo", immoRoutes);
app.use("/immoform", immoform);

const port = app.get("port");
export const server = app.listen(port, () =>
    console.log(`Server started on port ${port}`)
);
