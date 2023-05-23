import { IBook } from "./book.interface";
import Book from "./book.model";

export const createBook = async (payload: IBook): Promise<IBook> => {
  const data = new Book(payload);
  await data.save();
  return data;
};

// find all books in the "Books" collection with a specific genre,such as "Fantasy"
export const getAllBooksByGenre = async (
  genre: string
): Promise<IBook[] | null> => {
  const response = await Book.find({ genre: genre });
  return response;
};

// Implement a MongoDB query to find books in the "Books" collection with a specific genre “Sci-Fi” and published by “Roli Books”.

export const getAllBooksBy_GenreAndPublisher = async (
  genre: string,
  publisher: string
): Promise<IBook[] | null> => {
  const response = await Book.find({
    genre: genre,
    "publisher.name": publisher,
  });
  return response;
};

// Create a static method method within the "Book" model a new field named "featured" to the featured book objects. The value of this field should be "Popular" if the book's rating is greater than or equal to 4. For books with a rating exceeding 4.5, the value should be set to "BestSeller".

export const create_StaticMethod_within_theBook = async () => {
  const response = await Book.getFeature();
  return response;
};

// In the existing book data, the prices should be updated only for books published after 2020.

export const updatePrices = async () => {
  const response = await Book.updateMany({ publicationYear: { $gt: 2020 } }, [
    { $set: { price: { $convert: { input: "$price", to: "int" } } } },
  ]);
  return response;
};
