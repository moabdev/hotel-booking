import express, { Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


mongoose.connect(process.env.MONGO_CONNECTION_STRING as string)


const app = express();
app.use(express.json()); // Converts the body of api request into JSON automatically for us
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from express endpoint!" });
});

app.listen(PORT, () => {
  console.log(
    `Server started on port ${PORT} 🚀🚀🚀
    http://localhost:${PORT}/api/test`
  );
});
