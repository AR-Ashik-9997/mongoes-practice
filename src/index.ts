import express, { Application } from "express";
import cors from "cors";
import BooksRoute from "./app/books.route";
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", BooksRoute);
export default app;
