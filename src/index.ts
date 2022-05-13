import express from "express";
import mongoose from "mongoose";
import config from "./config";
import Routes from "./routes";
import { handleErrors } from "./middleware/handleErrors";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
const app = express();
// mongodb connection
// THIS STRING IS THE LINK TO OUR MONGODB
const url = "mongodb://127.0.0.1:27017/fyp";

// mongodb connection

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database.\n${err}`);
  });
const PORT = config.port || 3001;
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// console.log(path.join(__dirname, "uploads"));
app.use(cors());

app.get("/", (req: any, res: { send: (arg0: string) => any }) =>
  res.send("Express + TypeScript Server")
);
app.use("/api", Routes);
// middleware to handlerror
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
