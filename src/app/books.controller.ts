import { Request, Response } from "express";
import {
  create_StaticMethod_within_theBook,
  getAllBooksByGenre,
  getAllBooksBy_GenreAndPublisher,
  updatePrices,
} from "./book.service";


// find all books in the "Books" collection with a specific genre,such as "Fantasy"
export const getAllBooksByGenreController = async (
  req: Request,
  res: Response
) => {
  try {
    const genre = req.params.genre;
    const bookData = await getAllBooksByGenre(genre);
    res.status(201).json({ status: "Success", data: bookData });
  } catch (err) {
    res.status(400).send(err);
  }
};

// Implement a MongoDB query to find books specific genre and published controller.
export const getBooksByGenre_published_Controller = async (
  req: Request,
  res: Response
) => {
  try {
    const genre = req.params.genre;
    const publisher = req.params.publisher;
    const bookData = await getAllBooksBy_GenreAndPublisher(genre, publisher);
    res.status(201).json({ status: "Success", data: bookData });
  } catch (err) {
    res.status(400).send(err);
  }
};

// Create a static method method Controller
export const getStaticMethod = async (req: Request, res: Response) => {
  try {
    const feature_Book = await create_StaticMethod_within_theBook();
    res.status(200).json({
      status: "success",
      data: feature_Book,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// In the existing book data, the prices should be updated controller
export const updated_Book_price = async (req: Request, res: Response) => {
  try {
    const response = await updatePrices();
    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
