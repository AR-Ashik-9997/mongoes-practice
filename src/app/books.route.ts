import express from "express";
import {
  getAllBooksByGenreController,
  getBooksByGenre_published_Controller,
  getStaticMethod,
  updated_Book_price,
} from "./books.controller";

const router = express.Router();

// find all books in the "Books" collection with a specific genre for query parameters
router.get("/books/:genre", getAllBooksByGenreController);

// Implement a MongoDB query to find books in the "Books" collection with a specific genre and published by params id
router.get("/books/:genre/:publisher", getBooksByGenre_published_Controller);

// add featured fiellds using aggregation and static methods
router.get("/books/featured-book", getStaticMethod);

// update book price type after publising year 2020 
router.get("/books/update-bookprice", updated_Book_price);

export default router;
