import express from "express";
import {
  getAllBooksByGenreController,
  getBooksByGenre_published_Controller,
  getStaticMethod,
  updated_Book_price,
} from "./books.controller";

const router = express.Router();

// find all books in the "Books" collection with a specific genre,such as "Fantasy"
router.get("/all/:genre", getAllBooksByGenreController);

// Implement a MongoDB query to find books in the "Books" collection with a specific genre “Sci-Fi” and published by “Roli Books”.
router.get("/:genre/:publisher", getBooksByGenre_published_Controller);

// add featured fiellds using aggregation and static methods
router.get("/featured-book", getStaticMethod);

// update book price type after publising year 2020 
router.get("/update-bookprice", updated_Book_price);

export default router;
